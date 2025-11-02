import { supabase } from '../lib/supabase';

export async function getTopics() {
  try {
    const { data: topics, error } = await supabase
      .from('topics')
      .select(`
        *,
        subtopics (
          *,
          videos (*),
          interactives (*),
          articles (*)
        )
      `);

    if (error) throw error;
    return topics;
  } catch (error) {
    console.error('Error in getTopics:', error);
    throw error;
  }
}

export async function getTopic(slug: string) {
  try {
    // Normalize the input slug
    const normalizedSlug = slug.toLowerCase().replace(/[^a-z0-9-]/g, '').replace(/\s+/g, '-');
    console.log('Getting topic with slug:', { original: slug, normalized: normalizedSlug });
    
    const { data: topic, error } = await supabase
      .from('topics')
      .select(`
        *,
        subtopics (
          *,
          videos (*),
          interactives (*),
          articles (*)
        )
      `)
      .eq('slug', normalizedSlug)
      .single();

    if (error) {
      console.error('Error fetching topic:', error);
      throw error;
    }
    
    console.log('Found topic:', topic);
    return topic;
  } catch (error) {
    console.error('Error in getTopic:', error);
    return null;
  }
}

export async function getSubtopic(topicSlug: string, subtopicSlug: string) {
  try {
    // Normalize the input slugs
    const normalizedTopicSlug = topicSlug.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/\s+/g, '-');
    const normalizedSubtopicSlug = subtopicSlug.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/\s+/g, '-');
    
    console.log('Getting subtopic with params:', { 
      originalTopic: topicSlug, 
      normalizedTopic: normalizedTopicSlug,
      originalSubtopic: subtopicSlug,
      normalizedSubtopic: normalizedSubtopicSlug
    });
    
    // First, verify the topic exists
    const { data: topic, error: topicError } = await supabase
      .from('topics')
      .select('id, slug')
      .eq('slug', normalizedTopicSlug)
      .single();

    if (topicError) {
      console.error('Error fetching topic:', topicError);
      throw new Error(`Topic not found: ${topicSlug}`);
    }

    if (!topic) {
      throw new Error(`Topic not found: ${topicSlug}`);
    }
    
    // Now get the subtopic using the resolved slug
    const { data: subtopic, error: subtopicError } = await supabase
      .from('subtopics')
      .select(`
        *,
        videos (*),
        interactives (*),
        articles (*)
      `)
      .eq('topic_id', topic.id)
      .or(`slug.eq.${normalizedSubtopicSlug},display_slug.eq.${normalizedSubtopicSlug}`);

    if (subtopicError) {
      console.error('Error fetching subtopic:', subtopicError);
      throw new Error(`Subtopic not found: ${subtopicSlug} (${subtopicError.message})`);
    }

    if (!subtopic || subtopic.length === 0) {
      throw new Error(`Subtopic not found: ${subtopicSlug}`);
    }

    console.log('Found subtopics:', subtopic);
    return subtopic[0]; // Return the first matching subtopic
  } catch (error) {
    console.error('Error in getSubtopic:', error);
    return null;
  }
}
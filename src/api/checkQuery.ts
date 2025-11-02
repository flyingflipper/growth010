import { supabase } from '../lib/supabase';

async function checkQuery() {
  try {
    // Test specific subtopic query
    console.log('\nChecking specific subtopic...');
    const topicSlug = 'foundational-mindsets';
    const subtopicSlug = 'emotional-intelligence';
    
    console.log('Query parameters:', { topicSlug, subtopicSlug });

    // First get the topic
    const { data: topic, error: topicError } = await supabase
      .from('topics')
      .select('id')
      .eq('slug', topicSlug)
      .single();

    if (topicError) {
      console.error('Error fetching topic:', topicError);
      return;
    }

    console.log('Found topic:', topic);

    if (!topic) {
      console.log('Topic not found');
      return;
    }

    // Then get the subtopic
    const { data: subtopic, error: subtopicError } = await supabase
      .from('subtopics')
      .select('*')
      .eq('topic_id', topic.id);

    if (subtopicError) {
      console.error('Error fetching subtopic:', subtopicError);
    } else {
      console.log('Subtopics found:', subtopic);
    }

    // List all available subtopics for reference
    console.log('\nListing all subtopics for reference...');
    const { data: allSubtopics, error: listError } = await supabase
      .from('subtopics')
      .select('id, title, slug')
      .eq('topic_id', topic.id);

    if (listError) {
      console.error('Error listing subtopics:', listError);
    } else {
      console.log('Available subtopics:', allSubtopics);
    }

  } catch (error) {
    console.error('Error executing check:', error);
  }
}

checkQuery();
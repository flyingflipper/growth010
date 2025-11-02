import { supabase } from '../lib/supabase';

async function checkSlugs() {
  console.log('Checking topics table...');
  const { data: topics, error: topicsError } = await supabase
    .from('topics')
    .select('id, title, slug');
  
  if (topicsError) {
    console.error('Error fetching topics:', topicsError);
  } else {
    console.log('Topics:', topics);
  }

  console.log('\nChecking subtopics table...');
  const { data: subtopics, error: subtopicsError } = await supabase
    .from('subtopics')
    .select('id, title, slug, topic_id');
  
  if (subtopicsError) {
    console.error('Error fetching subtopics:', subtopicsError);
  } else {
    console.log('Subtopics:', subtopics);
  }
}

checkSlugs();
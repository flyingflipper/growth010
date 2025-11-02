import { createClient } from '@supabase/supabase-js';

// Get environment variables
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

// Check if environment variables are set
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Error: Supabase environment variables are not set');
  console.log('VITE_SUPABASE_URL:', supabaseUrl ? 'Set' : 'Not set');
  console.log('VITE_SUPABASE_ANON_KEY:', supabaseAnonKey ? 'Set' : 'Not set');
  process.exit(1);
}

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function checkConnection() {
  console.log('Checking Supabase connection...');
  
  try {
    // Test basic connection with a simple query
    const { data: connectionTest, error: connectionError } = await supabase
      .from('topics')
      .select('count(*)', { count: 'exact' });
    
    if (connectionError) {
      console.error('Connection error:', connectionError);
      return false;
    }
    
    console.log('✅ Connection successful!');
    
    // Check each table
    const tables = ['topics', 'subtopics', 'videos', 'interactives', 'articles'];
    
    for (const table of tables) {
      console.log(`\nChecking table: ${table}`);
      
      const { data, error, count } = await supabase
        .from(table)
        .select('*', { count: 'exact' })
        .limit(1);
      
      if (error) {
        console.error(`Error accessing ${table}:`, error);
      } else {
        console.log(`✅ Table ${table} is accessible`);
        console.log(`Records count: ${count}`);
        
        if (data && data.length > 0) {
          console.log('Sample record:', JSON.stringify(data[0], null, 2));
        } else {
          console.log('No records found in this table');
        }
      }
    }
    
    // Check specific subtopic
    console.log('\nChecking "emotional-intelligence" subtopic:');
    const { data: subtopic, error: subtopicError } = await supabase
      .from('subtopics')
      .select('*')
      .eq('slug', 'emotional-intelligence')
      .single();
    
    if (subtopicError) {
      console.error('Error fetching emotional-intelligence subtopic:', subtopicError);
      
      // Try with alternative query approaches
      console.log('\nTrying alternative query approaches:');
      
      const { data: allSubtopics, error: listError } = await supabase
        .from('subtopics')
        .select('id, title, slug, display_slug, alternative_slugs');
      
      if (listError) {
        console.error('Error listing subtopics:', listError);
      } else {
        console.log('All subtopics:');
        console.table(allSubtopics);
        
        // Find anything similar to emotional-intelligence
        const similar = allSubtopics.filter(s => 
          s.slug?.includes('emotion') || 
          s.display_slug?.includes('emotion') || 
          (s.alternative_slugs && s.alternative_slugs.some(a => a?.includes('emotion')))
        );
        
        if (similar.length > 0) {
          console.log('Similar subtopics found:', similar);
        } else {
          console.log('No similar subtopics found');
        }
      }
    } else {
      console.log('✅ Found emotional-intelligence subtopic:', subtopic);
    }
    
    return true;
  } catch (err) {
    console.error('Unexpected error:', err);
    return false;
  }
}

checkConnection()
  .then(success => {
    if (success) {
      console.log('\nOverall database connection check: PASSED');
    } else {
      console.log('\nOverall database connection check: FAILED');
    }
  })
  .catch(err => {
    console.error('Fatal error:', err);
  });
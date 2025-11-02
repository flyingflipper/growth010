import { createClient } from '@supabase/supabase-js';

// Get environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log('=== SUPABASE CONNECTION DIAGNOSIS ===');
console.log('Environment variables check:');
console.log('VITE_SUPABASE_URL:', supabaseUrl ? '✅ Set' : '❌ Not set');
console.log('VITE_SUPABASE_ANON_KEY:', supabaseAnonKey ? '✅ Set' : '❌ Not set');

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ ERROR: Supabase environment variables are missing. Please connect to Supabase using the "Connect to Supabase" button.');
  console.log('\nNo further tests will be run until environment variables are set.');
} else {
  console.log('\nAttempting to create Supabase client...');
  
  try {
    // Create Supabase client
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    console.log('✅ Supabase client created successfully');
    
    // Test connection with basic query
    console.log('\nTesting connection with basic query...');
    
    const testConnection = async () => {
      try {
        const { data, error } = await supabase.from('topics').select('count', { count: 'exact' });
        
        if (error) {
          console.error('❌ Connection error:', error);
          
          // Check if it's a CORS issue
          if (error.message && (
              error.message.includes('CORS') || 
              error.message.includes('cross-origin') ||
              error.message.includes('network error')
            )) {
            console.log('\n🔍 This appears to be a CORS issue. Please check your Supabase CORS settings:');
            console.log('1. Go to your Supabase dashboard');
            console.log('2. Navigate to Settings > API');
            console.log('3. Scroll down to "CORS (Cross-Origin Resource Sharing)"');
            console.log(`4. Add "${window.location.origin}" to the allowed origins`);
            console.log('5. Or use "*" for testing purposes (not recommended for production)');
          }
          
          // Check if it's an authentication issue
          if (error.message && (
              error.message.includes('auth') || 
              error.message.includes('key') ||
              error.message.includes('JWT') ||
              error.message.includes('token')
            )) {
            console.log('\n🔍 This appears to be an authentication issue. Please check:');
            console.log('1. Your anon key is correct and not expired');
            console.log('2. You\'re using the correct project URL');
            console.log('3. Try reconnecting to Supabase using the "Connect to Supabase" button');
          }
          
          return;
        }
        
        console.log('✅ Connection successful!');
        
        // Test specific tables
        const tables = ['topics', 'subtopics', 'videos', 'interactives', 'articles'];
        
        for (const table of tables) {
          console.log(`\nTesting access to "${table}" table...`);
          
          const { data, error, count } = await supabase
            .from(table)
            .select('*', { count: 'exact' })
            .limit(1);
          
          if (error) {
            console.error(`❌ Error accessing ${table}:`, error);
          } else {
            console.log(`✅ Table "${table}" is accessible`);
            console.log(`Records count: ${count}`);
            
            if (data && data.length > 0) {
              console.log('Sample record fields:', Object.keys(data[0]).join(', '));
            } else {
              console.log('No records found in this table');
            }
          }
        }
        
        // Test specific subtopic query
        console.log('\nTesting specific subtopic query...');
        const { data: subtopic, error: subtopicError } = await supabase
          .from('subtopics')
          .select('*')
          .eq('slug', 'emotional-intelligence')
          .single();
        
        if (subtopicError) {
          console.error('❌ Error fetching "emotional-intelligence" subtopic:', subtopicError);
          
          // Try alternative query
          console.log('\nTrying to list all subtopics to check if "emotional-intelligence" exists...');
          const { data: allSubtopics, error: listError } = await supabase
            .from('subtopics')
            .select('id, title, slug, display_slug, alternative_slugs');
          
          if (listError) {
            console.error('❌ Error listing subtopics:', listError);
          } else {
            console.log('✅ Found subtopics:', allSubtopics.length);
            
            // Find anything similar to emotional-intelligence
            const similar = allSubtopics.filter(s => 
              s.slug?.includes('emotion') || 
              s.display_slug?.includes('emotion') || 
              (s.alternative_slugs && s.alternative_slugs.some(a => a?.includes('emotion')))
            );
            
            if (similar.length > 0) {
              console.log('🔍 Similar subtopics found:', similar);
            } else {
              console.log('❌ No similar subtopics found');
            }
          }
        } else {
          console.log('✅ Found "emotional-intelligence" subtopic:', subtopic);
        }
        
        console.log('\n=== DIAGNOSIS COMPLETE ===');
      } catch (err) {
        console.error('❌ Unexpected error during testing:', err);
        
        if (err.message && err.message.includes('fetch')) {
          console.log('\n🔍 This appears to be a network issue. Please check:');
          console.log('1. Your internet connection');
          console.log('2. If Supabase is accessible from your current network');
          console.log('3. If there are any browser extensions blocking the connection');
        }
      }
    };
    
    testConnection();
    
  } catch (err) {
    console.error('❌ Error creating Supabase client:', err);
  }
}
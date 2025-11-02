import { createClient } from '@supabase/supabase-js';

// Get environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Parameters to test
const topicSlug = 'foundational-mindsets';
const subtopicSlug = 'emotional-intelligence';

console.log('=== SUBTOPIC PATH DIAGNOSIS ===');
console.log(`Testing path: /topics/${topicSlug}/${subtopicSlug}`);

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ ERROR: Supabase environment variables are missing');
  console.log('Please connect to Supabase using the "Connect to Supabase" button');
} else {
  // Create Supabase client
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  
  const diagnoseSubtopicPath = async () => {
    try {
      console.log('\n1. Checking if topic exists...');
      const { data: topic, error: topicError } = await supabase
        .from('topics')
        .select('id, title, slug')
        .eq('slug', topicSlug)
        .single();
      
      if (topicError) {
        console.error('❌ Error fetching topic:', topicError);
        return;
      }
      
      console.log('✅ Topic found:', topic);
      
      console.log('\n2. Checking if subtopic exists...');
      
      // First try direct slug match
      const { data: subtopicDirect, error: subtopicDirectError } = await supabase
        .from('subtopics')
        .select('id, title, slug, display_slug, alternative_slugs')
        .eq('topic_id', topic.id)
        .eq('slug', subtopicSlug);
      
      if (subtopicDirectError) {
        console.error('❌ Error in direct subtopic query:', subtopicDirectError);
      } else if (subtopicDirect && subtopicDirect.length > 0) {
        console.log('✅ Subtopic found by direct slug match:', subtopicDirect[0]);
      } else {
        console.log('❌ No subtopic found with direct slug match');
        
        // Try display_slug
        console.log('\n3. Trying display_slug match...');
        const { data: subtopicDisplay, error: subtopicDisplayError } = await supabase
          .from('subtopics')
          .select('id, title, slug, display_slug, alternative_slugs')
          .eq('topic_id', topic.id)
          .eq('display_slug', subtopicSlug);
        
        if (subtopicDisplayError) {
          console.error('❌ Error in display_slug query:', subtopicDisplayError);
        } else if (subtopicDisplay && subtopicDisplay.length > 0) {
          console.log('✅ Subtopic found by display_slug match:', subtopicDisplay[0]);
        } else {
          console.log('❌ No subtopic found with display_slug match');
          
          // Try alternative_slugs
          console.log('\n4. Trying alternative_slugs match...');
          const { data: subtopicAlt, error: subtopicAltError } = await supabase
            .from('subtopics')
            .select('id, title, slug, display_slug, alternative_slugs')
            .eq('topic_id', topic.id)
            .contains('alternative_slugs', [subtopicSlug]);
          
          if (subtopicAltError) {
            console.error('❌ Error in alternative_slugs query:', subtopicAltError);
          } else if (subtopicAlt && subtopicAlt.length > 0) {
            console.log('✅ Subtopic found by alternative_slugs match:', subtopicAlt[0]);
          } else {
            console.log('❌ No subtopic found with alternative_slugs match');
            
            // List all subtopics for this topic
            console.log('\n5. Listing all subtopics for this topic...');
            const { data: allSubtopics, error: allSubtopicsError } = await supabase
              .from('subtopics')
              .select('id, title, slug, display_slug, alternative_slugs')
              .eq('topic_id', topic.id);
            
            if (allSubtopicsError) {
              console.error('❌ Error listing subtopics:', allSubtopicsError);
            } else if (allSubtopics && allSubtopics.length > 0) {
              console.log('✅ Found subtopics for this topic:', allSubtopics);
            } else {
              console.log('❌ No subtopics found for this topic');
            }
          }
        }
      }
      
      // Test the resolveSubtopicSlug function logic
      console.log('\n6. Testing slug resolution logic...');
      
      // Normalize the input slug (similar to the resolveSubtopicSlug function)
      const normalizedSlug = subtopicSlug
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
      
      console.log('Normalized slug:', normalizedSlug);
      
      // Try direct match on canonical slug
      const { data: directMatch, error: directMatchError } = await supabase
        .from('subtopics')
        .select('id, title, slug')
        .eq('slug', normalizedSlug);
      
      if (directMatchError) {
        console.error('❌ Error in direct match query:', directMatchError);
      } else if (directMatch && directMatch.length > 0) {
        console.log('✅ Found direct match on slug:', directMatch[0]);
      } else {
        console.log('❌ No direct match found on slug');
      }
      
      // Try display_slug
      const { data: displayMatch, error: displayMatchError } = await supabase
        .from('subtopics')
        .select('id, title, slug, display_slug')
        .eq('display_slug', normalizedSlug);
      
      if (displayMatchError) {
        console.error('❌ Error in display_slug match query:', displayMatchError);
      } else if (displayMatch && displayMatch.length > 0) {
        console.log('✅ Found match on display_slug:', displayMatch[0]);
      } else {
        console.log('❌ No match found on display_slug');
      }
      
      // Try alternative_slugs
      const { data: altMatch, error: altMatchError } = await supabase
        .from('subtopics')
        .select('id, title, slug, alternative_slugs')
        .contains('alternative_slugs', [normalizedSlug]);
      
      if (altMatchError) {
        console.error('❌ Error in alternative_slugs match query:', altMatchError);
      } else if (altMatch && altMatch.length > 0) {
        console.log('✅ Found match in alternative_slugs:', altMatch[0]);
      } else {
        console.log('❌ No match found in alternative_slugs');
      }
      
      console.log('\n=== DIAGNOSIS COMPLETE ===');
      
    } catch (err) {
      console.error('❌ Unexpected error during diagnosis:', err);
    }
  };
  
  diagnoseSubtopicPath();
}
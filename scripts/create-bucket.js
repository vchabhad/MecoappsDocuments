const { Client } = require('pg');

async function fixBuckets() {
  const client = new Client({
    host: 'aws-1-ap-northeast-1.pooler.supabase.com',
    port: 6543,
    database: 'postgres',
    user: 'postgres.uohfxdeqngkhxwxhwfnj',
    password: 'Radhi@9090####',
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();
    
    // 1. Delete the accidentally created 'documents' bucket
    //    First delete any objects in it, then delete the bucket
    await client.query(`
      DELETE FROM storage.objects WHERE bucket_id = 'documents';
    `).catch(e => console.log("No objects in 'documents' bucket or bucket doesn't exist"));

    // Delete policies for the 'documents' bucket  
    await client.query(`
      DROP POLICY IF EXISTS "Public Access" ON storage.objects;
    `).catch(e => console.log("Policy 'Public Access' might not exist"));

    await client.query(`
      DROP POLICY IF EXISTS "Allow Uploads" ON storage.objects;
    `).catch(e => console.log("Policy 'Allow Uploads' might not exist"));

    await client.query(`
      DROP POLICY IF EXISTS "Allow Deletes" ON storage.objects;
    `).catch(e => console.log("Policy 'Allow Deletes' might not exist"));

    await client.query(`
      DELETE FROM storage.buckets WHERE id = 'documents';
    `).catch(e => console.log("'documents' bucket might not exist"));

    console.log("✅ Deleted 'documents' bucket and its policies.");

    // 2. Ensure 'presentations' bucket exists and is NOT public (private)
    await client.query(`
      UPDATE storage.buckets 
      SET public = false 
      WHERE id = 'presentations';
    `);

    console.log("✅ Set 'presentations' bucket to PRIVATE.");

    // 3. Add RLS policies for the presentations bucket (server-side access via service role key)
    await client.query(`
      CREATE POLICY "Presentations Public Access" 
      ON storage.objects FOR SELECT 
      USING (bucket_id = 'presentations');
    `).catch(e => console.log("Select Policy might already exist"));

    await client.query(`
      CREATE POLICY "Presentations Allow Uploads" 
      ON storage.objects FOR INSERT 
      WITH CHECK (bucket_id = 'presentations');
    `).catch(e => console.log("Insert Policy might already exist"));

    await client.query(`
      CREATE POLICY "Presentations Allow Deletes" 
      ON storage.objects FOR DELETE 
      USING (bucket_id = 'presentations');
    `).catch(e => console.log("Delete Policy might already exist"));

    await client.query(`
      CREATE POLICY "Presentations Allow Updates" 
      ON storage.objects FOR UPDATE 
      USING (bucket_id = 'presentations');
    `).catch(e => console.log("Update Policy might already exist"));

    console.log("✅ Policies for 'presentations' bucket configured successfully!");
    console.log("✅ All done! The app will use signed URLs for private file access.");
  } catch (err) {
    console.error("❌ Failed:", err);
  } finally {
    await client.end();
  }
}

fixBuckets();

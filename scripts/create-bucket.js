const { Client } = require('pg');

async function createBucket() {
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
    
    // Create the bucket in the storage schema
    await client.query(`
      INSERT INTO storage.buckets (id, name, public) 
      VALUES ('documents', 'documents', true) 
      ON CONFLICT (id) DO NOTHING;
    `);

    // We also need to add policies so the authenticated server can upload files to it
    // And users can read from it
    await client.query(`
      CREATE POLICY "Public Access" 
      ON storage.objects FOR SELECT 
      USING (bucket_id = 'documents');
    `).catch(e => console.log("Select Policy might already exist"));

    await client.query(`
      CREATE POLICY "Allow Uploads" 
      ON storage.objects FOR INSERT 
      WITH CHECK (bucket_id = 'documents');
    `).catch(e => console.log("Insert Policy might already exist"));

    await client.query(`
      CREATE POLICY "Allow Deletes" 
      ON storage.objects FOR DELETE 
      USING (bucket_id = 'documents');
    `).catch(e => console.log("Delete Policy might already exist"));

    console.log("✅ Bucket 'documents' created successfully!");
  } catch (err) {
    console.error("❌ Failed:", err);
  } finally {
    await client.end();
  }
}

createBucket();

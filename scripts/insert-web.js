const { Client } = require('pg');

async function insertWebPresentation() {
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
    
    // Check if it already exists
    const res = await client.query(`SELECT id FROM "Documents" WHERE id = 'ecosystem-proposal'`);
    if (res.rows.length === 0) {
      await client.query(`
        INSERT INTO "Documents" (id, title, type, link, created_at)
        VALUES (
          'ecosystem-proposal', 
          'MecoApps Ecosystem Proposal', 
          'web', 
          '/view/ecosystem-proposal', 
          '2023-10-24T00:00:00.000Z'
        )
      `);
      console.log("✅ Inserted Web Presentation into Documents table!");
    } else {
      console.log("Web Presentation already exists in DB.");
    }

  } catch (err) {
    console.error("❌ Failed:", err);
  } finally {
    await client.end();
  }
}

insertWebPresentation();

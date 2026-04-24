const { Client } = require('pg');
require('dotenv').config({ path: '.env.local' });

async function fixSequence() {
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
    
    // Advance the sequence for DocumentAccess.id so it doesn't collide with manually inserted rows
    await client.query(`
      SELECT setval(
        pg_get_serial_sequence('"DocumentAccess"', 'id'), 
        COALESCE(MAX(id), 1)
      ) FROM "DocumentAccess";
    `);
    
    // Also do Users just in case
    await client.query(`
      SELECT setval(
        pg_get_serial_sequence('"Users"', 'id'), 
        COALESCE(MAX(id), 1)
      ) FROM "Users";
    `);

    console.log("✅ Fixed sequences!");
  } catch (err) {
    console.error("❌ Failed:", err);
  } finally {
    await client.end();
  }
}

fixSequence();

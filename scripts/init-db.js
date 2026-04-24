const { Client } = require('pg');
require('dotenv').config({ path: '.env.local' });

async function initDB() {
  if (!process.env.DATABASE_URL) {
    console.warn("⚠️ DATABASE_URL is not set in .env.local. Skipping automatic database schema initialization.");
    return;
  }

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
    console.log("✅ Connected to Postgres database. Checking schema...");

    // 1. Create Users table
    await client.query(`
      CREATE TABLE IF NOT EXISTS "Users" (
        id SERIAL PRIMARY KEY,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
      );
    `);

    // 2. Add 'role' column if it doesn't exist
    await client.query(`
      DO $$
      BEGIN
        IF NOT EXISTS (
          SELECT 1 FROM information_schema.columns 
          WHERE table_name='Users' AND column_name='role'
        ) THEN
          ALTER TABLE "Users" ADD COLUMN role TEXT DEFAULT 'viewer';
          RAISE NOTICE 'Added role column to Users table.';
        END IF;
      END
      $$;
    `);

    // 3. Make sure 'Admin' user has 'admin' role if it exists
    await client.query(`
      UPDATE "Users" SET role = 'admin' WHERE username = 'Admin' OR username = 'admin';
    `);

    // 4. Create Documents table
    await client.query(`
      CREATE TABLE IF NOT EXISTS "Documents" (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        type TEXT NOT NULL,
        link TEXT NOT NULL,
        created_at TEXT NOT NULL
      );
    `);

    // 5. Create DocumentAccess table
    await client.query(`
      CREATE TABLE IF NOT EXISTS "DocumentAccess" (
        id SERIAL PRIMARY KEY,
        username TEXT REFERENCES "Users"(username),
        document_id TEXT REFERENCES "Documents"(id)
      );
    `);

    console.log("🚀 Database schema is fully verified and up to date!");

  } catch (err) {
    console.error("❌ Failed to initialize database schema:", err);
  } finally {
    await client.end();
  }
}

initDB();

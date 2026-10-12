const fs = require('fs');
const path = require('path');
const { Client } = require('pg');

const sqlContent = fs.readFileSync(path.join(__dirname, '../supabase-complete-setup-and-seed.sql'), 'utf8');

const configs = [
  {
    host: 'aws-0-ap-southeast-1.pooler.supabase.com',
    port: 6543,
    user: 'postgres.dgqfrzwxxkkbuddtwjpc',
    password: 'oOPnjSgLGI8Sec9z',
    database: 'postgres',
    ssl: { rejectUnauthorized: false },
  },
  {
    host: 'aws-0-ap-southeast-1.pooler.supabase.com',
    port: 5432,
    user: 'postgres.dgqfrzwxxkkbuddtwjpc',
    password: 'oOPnjSgLGI8Sec9z',
    database: 'postgres',
    ssl: { rejectUnauthorized: false },
  },
];

async function run() {
  let client = null;
  let connected = false;

  for (const cfg of configs) {
    try {
      console.log(`Attempting connection to ${cfg.host}:${cfg.port} with user ${cfg.user}...`);
      client = new Client(cfg);
      await client.connect();
      console.log('Connected successfully to PostgreSQL on Supabase!');
      connected = true;
      break;
    } catch (err) {
      console.warn('Connection failed:', err.message);
      if (client) {
        try { await client.end(); } catch (_) {}
      }
    }
  }

  if (!connected) {
    console.error('Could not connect to any database endpoint.');
    process.exit(1);
  }

  console.log('Executing SQL migration script (size:', (sqlContent.length / 1024).toFixed(2), 'KB)...');
  try {
    await client.query(sqlContent);
    console.log('Migration SQL executed successfully!');

    // Verify tables
    const res = await client.query(`
      SELECT table_name FROM information_schema.tables 
      WHERE table_schema = 'public' AND table_name LIKE '%_music'
      ORDER BY table_name;
    `);
    console.log('Created tables in database:', res.rows.map(r => r.table_name));

    // Verify row counts
    const lyricsCount = await client.query('SELECT count(*) FROM public.lyrics_music;');
    const playlistsCount = await client.query('SELECT count(*) FROM public.playlists_music;');
    const blogsCount = await client.query('SELECT count(*) FROM public.blogs_music;');

    console.log(`\n================ DATA VERIFICATION ================`);
    console.log(`- lyrics_music: ${lyricsCount.rows[0].count} songs`);
    console.log(`- playlists_music: ${playlistsCount.rows[0].count} playlists`);
    console.log(`- blogs_music: ${blogsCount.rows[0].count} blogs`);
    console.log(`====================================================\n`);

  } catch (err) {
    console.error('Error executing migration SQL:', err);
  } finally {
    await client.end();
  }
}

run();

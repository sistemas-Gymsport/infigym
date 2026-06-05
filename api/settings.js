import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  const sql = neon(process.env.DATABASE_URL);

  if (req.method === 'GET') {
    try {
      const settings = await sql`SELECT config_data FROM site_settings WHERE id = 1`;
      return res.status(200).json(settings[0]?.config_data || {});
    } catch (error) {
      return res.status(500).json({ error: 'Database error' });
    }
  }

  if (req.method === 'PUT') {
    try {
      const configData = JSON.stringify(req.body);
      await sql`
        INSERT INTO site_settings (id, config_data) 
        VALUES (1, ${configData}::jsonb)
        ON CONFLICT (id) DO UPDATE SET config_data = ${configData}::jsonb
      `;
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ error: 'Database error' });
    }
  }

  res.status(405).end();
}
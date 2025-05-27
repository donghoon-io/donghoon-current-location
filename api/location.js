let latestCity = 'Seattle';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'POST') {
    const { city } = req.body;
    if (!city) return res.status(400).json({ error: 'City is required' });
    latestCity = city;
    return res.status(200).json({ status: 'success', city });
  }

  if (req.method === 'GET') {
    return res.status(200).json({ city: latestCity });
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
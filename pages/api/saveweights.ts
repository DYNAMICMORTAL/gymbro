import { NextApiRequest, NextApiResponse } from 'next';
import { getDbConnection } from '../../src/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { weight } = req.body;
    const client = await getDbConnection();
    const db = client.db('gymbrodatabase'); // replace with your database name
    const collection = db.collection('weights'); // replace with your collection name

    const result = await collection.insertOne({
      weight,
      date: new Date(),
    });

    res.status(200).json({ message: 'Weight saved successfully', id: result.insertedId });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
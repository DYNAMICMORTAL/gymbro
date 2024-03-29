import { NextApiRequest, NextApiResponse } from 'next';
import { getDbConnection } from '../../src/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const client = await getDbConnection();
        const db = client.db('gymbrodatabase'); // replace with your database name
        const collection = db.collection('weights'); // replace with your collection name

        const latestWeight = await collection.find().sort({ date: -1 }).limit(1).toArray();

        res.status(200).json({ weight: latestWeight[0]?.weight || 'No weight data available' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
import { NextApiRequest, NextApiResponse } from 'next';
import { getDbConnection } from '../../src/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const client = await getDbConnection();
    const db = client.db('gymbrodatabase'); // replace with your database name
    const collection = db.collection('dates'); // replace with your collection name

    if (req.method === 'POST') {
        const { date, workout, isDone } = req.body;

        await collection.updateOne({ date }, { $set: { workout, isDone } }, { upsert: true });

        res.status(200).json({ message: 'Date updated successfully' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
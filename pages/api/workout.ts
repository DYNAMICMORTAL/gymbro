import { NextApiRequest, NextApiResponse } from 'next';
import { getDbConnection } from '../../src/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const { day } = req.query;
        const client = await getDbConnection();
        const db = client.db('gymbrodatabase'); // replace with your database name
        const collection = db.collection('workouts'); // replace with your collection name

        const workout = await collection.findOne({ day: Number(day) });

        res.status(200).json({ workout: workout?.workout || 'Rest Day' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
import { NextApiRequest, NextApiResponse } from 'next';
import { getDbConnection } from '../../src/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const client = await getDbConnection();
    const db = client.db('gymbrodatabase'); // replace with your database name
    const collection = db.collection('workouts'); // replace with your collection name

    if (req.method === 'GET') {
        const { day } = req.query;

        const workout = await collection.findOne({ day: Number(day) });

        res.status(200).json({ workout: workout?.workout || 'Rest Day', isDone: workout?.isDone || false });
    } else if (req.method === 'POST') {
        const { day, isDone } = req.body;

        await collection.updateOne({ day: Number(day) }, { $set: { isDone } }, { upsert: true });

        res.status(200).json({ message: 'Workout status updated' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
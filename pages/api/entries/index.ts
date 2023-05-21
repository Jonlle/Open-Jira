import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/database';
import { Entry, IEntry } from '@/models';

type Data = { message: string } | IEntry[] | IEntry;

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'GET':
      return getEntries(res);
    case 'POST':
      return postEntry(req, res);

    default:
      return res.status(200).json({ message: 'Example' });
  }
}

const getEntries = async (res: NextApiResponse<Data>) => {
  await db.connect();
  const entries = await Entry.find().sort({ createdAt: 'ascending' });
  await db.disconnect();

  res.status(200).json(entries);
};

const postEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { description = '' } = req.body;

  const newEntry = new Entry({
    description,
    createAt: Date.now(),
  });
  try {
    await db.connect();
    const entry = await newEntry.save();
    await db.disconnect();
    res.status(201).json(entry);
  } catch (error) {
    await db.disconnect();
    console.log(error);

    res.status(500).json({ message: 'Algo salio mal, revisar consola del servidor' });
  }
};

import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/database';
import { Entry, IEntry } from '@/models';
import mongoose from 'mongoose';

type Data = { message: string } | IEntry;

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { id } = req.query;
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: 'El id no es valido' + id });
  }

  switch (req.method) {
    case 'GET':
      return getEntry(req, res);
    case 'POST':
      return updateEntry(req, res);

    default:
      return res.status(200).json({ message: 'Example' });
  }
}

const getEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();
  const entry = await Entry.findById(req.query.id);
  await db.disconnect();

  res.status(200).json(entry!);
};

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;

  try {
    await db.connect();

    const entry = await Entry.findById(id);

    if (!entry) {
      await db.disconnect();
      return res.status(404).json({ message: 'No se encontro ningun registro con ese ID: ' + id });
    }

    const { description = entry.description, status = entry.status } = req.body;

    const updatedEntry = await Entry.findByIdAndUpdate(id, { description, status }, { runValidators: true, new: true });
    await db.disconnect();

    res.status(200).json(updatedEntry!);
  } catch (error) {
    await db.disconnect();
    console.log(error);

    res.status(500).json({ message: 'Algo salio mal, revisar consola del servidor' });
  }
};

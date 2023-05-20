interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createAt: number;
}

export const seedData: SeedData = {
  entries: [
    { description: 'Finalizada: Tarea 1', createAt: Date.now() - 100000, status: 'finished' },
    { description: 'En Progreso: Tarea 2', createAt: Date.now() - 1000000, status: 'in-progress' },
    { description: 'Pendiente: Tarea 3', createAt: Date.now(), status: 'pending' },
  ],
};

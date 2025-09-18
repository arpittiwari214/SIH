import { Router } from 'express';
import prisma from '../db';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const scholarships = await prisma.scholarship.findMany();
    res.json(scholarships);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
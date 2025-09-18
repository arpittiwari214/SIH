import { Router } from 'express';
import prisma from '../db';
import { z } from 'zod';

const router = Router();

const applySchema = z.object({
  scholarshipId: z.string(),
  userId: z.string(),
});

// Apply for a scholarship
router.post('/apply', async (req, res) => {
  try {
    const { scholarshipId, userId } = applySchema.parse(req.body);

    // Check if the user has already applied for this scholarship
    const existingApplication = await prisma.application.findFirst({
      where: {
        scholarshipId,
        userId,
      },
    });

    if (existingApplication) {
      return res.status(400).json({ message: 'You have already applied for this scholarship' });
    }

    const application = await prisma.application.create({
      data: {
        scholarshipId,
        userId,
        status: 'PENDING',
      },
    });

    res.status(201).json({ message: 'Application submitted successfully', application });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: error.errors });
    }
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
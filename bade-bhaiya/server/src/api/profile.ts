import { Router } from 'express';
import prisma from '../db';

const router = Router();

// Get user profile
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const userProfile = await prisma.profile.findUnique({
      where: { userId: userId },
      include: { user: true },
    });

    if (!userProfile) {
      return res.status(404).json({ message: 'User profile not found' });
    }

    res.json(userProfile);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
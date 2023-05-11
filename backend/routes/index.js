import { Router } from 'express';
import ApiRoutes from './api.js';
import RecordRoutes from './record.js';

const router = Router();

/* ROUTES */
router.use('/api', ApiRoutes);
router.use('/record', RecordRoutes);
export default router;
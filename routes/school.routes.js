import express from 'express';
import {
  getAllSchools, getSchoolById,
  createSchool, updateSchool, deleteSchool,
  getSchoolStats
} from '../controllers/school.controller.js';
import { authMiddleware, superAdminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/schools',          authMiddleware, superAdminOnly, getAllSchools);
router.get('/schools/:id/stats',authMiddleware, superAdminOnly, getSchoolStats);
router.get('/schools/:id',      authMiddleware, superAdminOnly, getSchoolById);
router.post('/schools',         authMiddleware, superAdminOnly, createSchool);
router.put('/schools/:id',      authMiddleware, superAdminOnly, updateSchool);
router.delete('/schools/:id',   authMiddleware, superAdminOnly, deleteSchool);

export default router;

import express from 'express';
import { getAllColleges, getCollegeById, getCollegeByCode, createCollege, updateCollege, deleteCollege } from '../controllers/college.controller.js';

const router = express.Router();

router.get('/colleges',           getAllColleges);
router.get('/colleges/code/:code',getCollegeByCode);
router.get('/colleges/:id',       getCollegeById);
router.post('/colleges',          createCollege);
router.put('/colleges/:id',       updateCollege);
router.delete('/colleges/:id',    deleteCollege);

export default router;

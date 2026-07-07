import express from 'express';
import * as collegeController from '../controllers/college.controller.js';

const router = express.Router();

/**
 * College Routes
 * All routes require tenant resolution middleware
 */

// GET all colleges (with filters: status, type, search)
router.get('/colleges', collegeController.getAllColleges);

// GET college by code
router.get('/colleges/code/:code', collegeController.getCollegeByCode);

// GET college by ID
router.get('/colleges/:id', collegeController.getCollegeById);

// POST new college
router.post('/colleges', collegeController.createCollege);

// PUT update college
router.put('/colleges/:id', collegeController.updateCollege);

// DELETE college
router.delete('/colleges/:id', collegeController.deleteCollege);

export default router;

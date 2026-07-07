import express from 'express';
import * as schoolController from '../controllers/school.controller.js';

const router = express.Router();

/**
 * School Management Routes
 * These routes are for superadmin only to manage schools
 */

/**
 * GET /api/schools
 * Get all schools
 */
router.get('/schools', schoolController.getAllSchools);

/**
 * GET /api/schools/:id
 * Get school by ID
 */
router.get('/schools/:id', schoolController.getSchoolById);

/**
 * GET /api/schools/domain/:domain
 * Get school by domain
 */
router.get('/schools/domain/:domain', schoolController.getSchoolByDomain);

/**
 * POST /api/schools
 * Create new school with separate database
 */
router.post('/schools', schoolController.createSchool);

/**
 * PUT /api/schools/:id
 * Update school information
 */
router.put('/schools/:id', schoolController.updateSchool);

/**
 * DELETE /api/schools/:id
 * Delete school and its database
 */
router.delete('/schools/:id', schoolController.deleteSchool);

/**
 * GET /api/schools/:id/verify
 * Verify school database connectivity
 */
router.get('/schools/:id/verify', schoolController.verifySchoolDatabase);

/**
 * GET /api/schools/:id/stats
 * Get school statistics (colleges, students, teachers count)
 */
router.get('/schools/:id/stats', schoolController.getSchoolStats);

export default router;

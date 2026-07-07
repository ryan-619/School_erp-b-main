import express from 'express';
import * as domainController from '../controllers/domain.controller.js';

const router = express.Router();

/**
 * Domain Routes
 * These routes do NOT require tenant resolver middleware
 * They query the central database for school information
 */

// GET current domain information
// Example: GET http://localhost:3000/api/domain
router.get('/domain', domainController.getCurrentDomainInfo);

// GET all domains/schools
// Example: GET http://localhost:3000/api/domains
router.get('/domains', domainController.getAllDomains);

// GET specific domain information by domain name
// Example: GET http://localhost:3000/api/domain/abcschool.com
router.get('/domain/:domain', domainController.getDomainInfo);

export default router;

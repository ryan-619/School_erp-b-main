import express from 'express';
import { signupAdmin, loginAdmin, signupStaff, loginStaff, signupStudent, loginStudent, signupParent, loginParent } from '../controllers/users.controller.js';

const router = express.Router();

router.post('/admin/signup',   signupAdmin);
router.post('/admin/login',    loginAdmin);
router.post('/staff/signup',   signupStaff);
router.post('/staff/login',    loginStaff);
router.post('/student/signup', signupStudent);
router.post('/student/login',  loginStudent);
router.post('/parent/signup',  signupParent);
router.post('/parent/login',   loginParent);

export default router;

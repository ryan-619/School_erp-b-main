import express from "express";
import {
  // Admin
  signupAdmin,
  loginAdmin,
  // Staff
  signupStaff,
  loginStaff,
  // Student
  signupStudent,
  loginStudent,
  // Parent
  signupParent,
  loginParent
} from "../controllers/users.controller.js";

const router = express.Router();

/**
 * 📝 ADMIN ROUTES
 */

// ✅ Admin Signup
router.post("/admin/signup", signupAdmin);

// 🔐 Admin Login
router.post("/admin/login", loginAdmin);

/**
 * 📝 STAFF ROUTES
 */

// ✅ Staff Signup
router.post("/staff/signup", signupStaff);

// 🔐 Staff Login
router.post("/staff/login", loginStaff);

/**
 * 📝 STUDENT ROUTES
 */

// ✅ Student Signup
router.post("/student/signup", signupStudent);

// 🔐 Student Login
router.post("/student/login", loginStudent);

/**
 * 📝 PARENT ROUTES
 */

// ✅ Parent Signup
router.post("/parent/signup", signupParent);

// 🔐 Parent Login
router.post("/parent/login", loginParent);

export default router;

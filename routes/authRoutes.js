// routes/authRoutes.js

import express from "express";
import {
  signupSuperAdmin,
  loginSuperAdmin,
  logoutSuperAdmin
} from "../controllers/superAdmin.controller.js";
import { authMiddleware } from "../middleware/authmiddleware.js";

const router = express.Router();

/**
 * 📝 Authentication Routes
 */

// ✅ SIGNUP - Create new superadmin account
router.post("/signup", signupSuperAdmin);

// 🔐 LOGIN - Login with email and password
router.post("/login", loginSuperAdmin);

// 🚪 LOGOUT - Logout (requires authentication)
router.post("/logout", authMiddleware, logoutSuperAdmin);

export default router;
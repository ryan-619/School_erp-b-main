// middleware/authMiddleware.js

import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "super_secret_key";

/**
 * Authentication Middleware
 * Verifies JWT token from cookies or Authorization header
 * Attaches user info to req.user
 */
export const authMiddleware = (req, res, next) => {
  try {
    // Get token from cookies or Authorization header
    let token = req.cookies?.token;
    
    if (!token && req.headers.authorization) {
      // Support Bearer token in Authorization header
      const authHeader = req.headers.authorization;
      if (authHeader.startsWith("Bearer ")) {
        token = authHeader.substring(7);
      }
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized - No token provided",
        code: "NO_TOKEN"
      });
    }

    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Attach user to request
    req.user = decoded;

    next();

  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Unauthorized - Token expired",
        code: "TOKEN_EXPIRED",
        expiredAt: err.expiredAt
      });
    }
    
    if (err.name === "JsonWebTokenError") {
      return res.status(401).json({
        success: false,
        message: "Unauthorized - Invalid token",
        code: "INVALID_TOKEN",
        error: process.env.NODE_ENV === "development" ? err.message : undefined
      });
    }

    return res.status(401).json({
      success: false,
      message: "Unauthorized - Authentication failed",
      code: "AUTH_FAILED",
      error: process.env.NODE_ENV === "development" ? err.message : undefined
    });
  }
};

/**
 * Superadmin Only Middleware
 * Verifies user has superadmin role
 */
export const superAdminOnly = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized - Authentication required"
    });
  }

  if (req.user.role !== 'superadmin') {
    return res.status(403).json({
      success: false,
      message: "Forbidden - Superadmin access required",
      code: "SUPERADMIN_REQUIRED"
    });
  }

  next();
};

/**
 * Admin or Superadmin Middleware
 * Verifies user has admin or superadmin role
 */
export const adminOrHigher = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized - Authentication required"
    });
  }

  if (!['admin', 'superadmin'].includes(req.user.role)) {
    return res.status(403).json({
      success: false,
      message: "Forbidden - Admin access required",
      code: "ADMIN_REQUIRED"
    });
  }

  next();
};
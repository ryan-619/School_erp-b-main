import * as collegeService from '../services/college.service.js';
import { validateCollege } from '../models/college.model.js';

/**
 * College Controller
 * Handles HTTP requests related to colleges
 */

/**
 * Get all colleges
 * GET /api/colleges
 * Query params: status, type, search
 */
export const getAllColleges = async (req, res) => {
  try {
    const { status, type, search } = req.query;

    let colleges;

    if (search) {
      colleges = await collegeService.searchColleges(req.tenant, search);
    } else if (status) {
      colleges = await collegeService.getCollegesByStatus(req.tenant, status);
    } else if (type) {
      colleges = await collegeService.getCollegesByType(req.tenant, type);
    } else {
      colleges = await collegeService.getAllColleges(req.tenant);
    }

    res.json({
      success: true,
      message: 'Colleges fetched successfully',
      school: req.tenant.school_name,
      count: colleges.length,
      data: colleges
    });
  } catch (error) {
    console.error('Error in getAllColleges:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching colleges',
      error: error.message
    });
  }
};

/**
 * Get college by ID
 * GET /api/colleges/:id
 */
export const getCollegeById = async (req, res) => {
  try {
    const { id } = req.params;

    const college = await collegeService.getCollegeById(req.tenant, id);

    if (!college) {
      return res.status(404).json({
        success: false,
        message: 'College not found',
        id
      });
    }

    res.json({
      success: true,
      message: 'College fetched successfully',
      data: college
    });
  } catch (error) {
    console.error('Error in getCollegeById:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching college',
      error: error.message
    });
  }
};

/**
 * Get college by code
 * GET /api/colleges/code/:code
 */
export const getCollegeByCode = async (req, res) => {
  try {
    const { code } = req.params;

    const college = await collegeService.getCollegeByCode(req.tenant, code);

    if (!college) {
      return res.status(404).json({
        success: false,
        message: 'College not found',
        code
      });
    }

    res.json({
      success: true,
      message: 'College fetched successfully',
      data: college
    });
  } catch (error) {
    console.error('Error in getCollegeByCode:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching college',
      error: error.message
    });
  }
};

/**
 * Create new college
 * POST /api/colleges
 */
export const createCollege = async (req, res) => {
  try {
    const collegeData = {
      name: req.body.name,
      code: req.body.code,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      pincode: req.body.pincode,
      website: req.body.website,
      principal_name: req.body.principal_name,
      principal_email: req.body.principal_email,
      principal_phone: req.body.principal_phone,
      established_year: req.body.established_year,
      affiliation: req.body.affiliation,
      type: req.body.type,
      status: req.body.status,
      description: req.body.description
    };

    // Validate required fields
    const validation = validateCollege(collegeData, ['name', 'code', 'email']);
    
    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: validation.errors
      });
    }

    // Check if college code already exists
    const existingCollege = await collegeService.getCollegeByCode(req.tenant, collegeData.code);
    if (existingCollege) {
      return res.status(409).json({
        success: false,
        message: 'College with this code already exists'
      });
    }

    const college = await collegeService.createCollege(req.tenant, collegeData);

    res.status(201).json({
      success: true,
      message: 'College created successfully',
      data: college
    });
  } catch (error) {
    console.error('Error in createCollege:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating college',
      error: error.message
    });
  }
};

/**
 * Update college
 * PUT /api/colleges/:id
 */
export const updateCollege = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if college exists
    const existing = await collegeService.getCollegeById(req.tenant, id);
    if (!existing) {
      return res.status(404).json({
        success: false,
        message: 'College not found',
        id
      });
    }

    // Prepare update data (only include fields that are provided)
    const updateData = {};
    const allowedFields = [
      'name', 'code', 'email', 'phone', 'address', 'city', 'state',
      'pincode', 'website', 'principal_name', 'principal_email',
      'principal_phone', 'established_year', 'affiliation', 'type',
      'status', 'description'
    ];

    allowedFields.forEach(field => {
      if (field in req.body && req.body[field] !== undefined) {
        updateData[field] = req.body[field];
      }
    });

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No fields to update provided'
      });
    }

    // Check if new code already exists (if code is being updated)
    if (updateData.code && updateData.code !== existing.code) {
      const codeExists = await collegeService.getCollegeByCode(req.tenant, updateData.code);
      if (codeExists) {
        return res.status(409).json({
          success: false,
          message: 'College with this code already exists'
        });
      }
    }

    const college = await collegeService.updateCollege(req.tenant, id, updateData);

    res.json({
      success: true,
      message: 'College updated successfully',
      data: college
    });
  } catch (error) {
    console.error('Error in updateCollege:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating college',
      error: error.message
    });
  }
};

/**
 * Delete college
 * DELETE /api/colleges/:id
 */
export const deleteCollege = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if college exists
    const college = await collegeService.getCollegeById(req.tenant, id);
    if (!college) {
      return res.status(404).json({
        success: false,
        message: 'College not found',
        id
      });
    }

    const deleted = await collegeService.deleteCollege(req.tenant, id);

    if (!deleted) {
      return res.status(500).json({
        success: false,
        message: 'Failed to delete college'
      });
    }

    res.json({
      success: true,
      message: 'College deleted successfully',
      data: { id }
    });
  } catch (error) {
    console.error('Error in deleteCollege:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting college',
      error: error.message
    });
  }
};

export default {
  getAllColleges,
  getCollegeById,
  getCollegeByCode,
  createCollege,
  updateCollege,
  deleteCollege
};

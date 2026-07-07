import * as tenantService from '../services/tenant.service.js';

/**
 * Student Controller
 * Handles HTTP requests related to students
 */

/**
 * Get all students
 * GET /api/students
 */
export const getAllStudents = async (req, res) => {
  try {
    const students = await tenantService.getAllStudents(req.tenant);
    
    res.json({
      success: true,
      message: 'Students fetched successfully',
      school: req.tenant.school_name,
      data: students
    });
  } catch (error) {
    console.error('Error in getAllStudents:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching students',
      error: error.message
    });
  }
};

/**
 * Get student by ID
 * GET /api/students/:id
 */
export const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await tenantService.getStudentById(req.tenant, id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Student not found'
      });
    }

    res.json({
      success: true,
      message: 'Student fetched successfully',
      data: student
    });
  } catch (error) {
    console.error('Error in getStudentById:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching student',
      error: error.message
    });
  }
};

/**
 * Create new student
 * POST /api/students
 */
export const createStudent = async (req, res) => {
  try {
    const { first_name, last_name, email, phone, class: studentClass, section } = req.body;

    // Validation
    if (!first_name || !last_name || !email) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: first_name, last_name, email'
      });
    }

    const student = await tenantService.createStudent(req.tenant, {
      first_name,
      last_name,
      email,
      phone,
      class: studentClass,
      section
    });

    res.status(201).json({
      success: true,
      message: 'Student created successfully',
      data: student
    });
  } catch (error) {
    console.error('Error in createStudent:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating student',
      error: error.message
    });
  }
};

/**
 * Update student
 * PUT /api/students/:id
 */
export const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name, email, phone, class: studentClass, section } = req.body;

    // Check if student exists
    const existing = await tenantService.getStudentById(req.tenant, id);
    if (!existing) {
      return res.status(404).json({
        success: false,
        message: 'Student not found'
      });
    }

    const student = await tenantService.updateStudent(req.tenant, id, {
      first_name: first_name || existing.first_name,
      last_name: last_name || existing.last_name,
      email: email || existing.email,
      phone: phone || existing.phone,
      class: studentClass || existing.class,
      section: section || existing.section
    });

    res.json({
      success: true,
      message: 'Student updated successfully',
      data: student
    });
  } catch (error) {
    console.error('Error in updateStudent:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating student',
      error: error.message
    });
  }
};

/**
 * Delete student
 * DELETE /api/students/:id
 */
export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await tenantService.deleteStudent(req.tenant, id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: 'Student not found'
      });
    }

    res.json({
      success: true,
      message: 'Student deleted successfully'
    });
  } catch (error) {
    console.error('Error in deleteStudent:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting student',
      error: error.message
    });
  }
};

import { executeTenantQuery } from '../config/tenantDB.js';

/**
 * Tenant Service
 * Business logic for tenant-specific operations
 */

/**
 * Get all students for a tenant
 * @param {Object} tenantInfo - Tenant information from middleware
 * @returns {Promise<Array>} List of students
 */
export const getAllStudents = async (tenantInfo) => {
  try {
    const query = 'SELECT * FROM students';
    const students = await executeTenantQuery(
      tenantInfo.id,
      tenantInfo.db_config,
      query
    );
    return students;
  } catch (error) {
    console.error(`Error fetching students for tenant ${tenantInfo.id}:`, error);
    throw error;
  }
};

/**
 * Get a single student by ID
 * @param {Object} tenantInfo - Tenant information from middleware
 * @param {number} studentId - Student ID
 * @returns {Promise<Object>} Student data
 */
export const getStudentById = async (tenantInfo, studentId) => {
  try {
    const query = 'SELECT * FROM students WHERE id = ?';
    const students = await executeTenantQuery(
      tenantInfo.id,
      tenantInfo.db_config,
      query,
      [studentId]
    );
    return students[0] || null;
  } catch (error) {
    console.error(`Error fetching student ${studentId} for tenant ${tenantInfo.id}:`, error);
    throw error;
  }
};

/**
 * Create a new student
 * @param {Object} tenantInfo - Tenant information from middleware
 * @param {Object} studentData - Student data
 * @returns {Promise<Object>} Created student
 */
export const createStudent = async (tenantInfo, studentData) => {
  try {
    const query = `
      INSERT INTO students (first_name, last_name, email, phone, class, section, created_at)
      VALUES (?, ?, ?, ?, ?, ?, NOW())
    `;
    
    const result = await executeTenantQuery(
      tenantInfo.id,
      tenantInfo.db_config,
      query,
      [
        studentData.first_name,
        studentData.last_name,
        studentData.email,
        studentData.phone,
        studentData.class,
        studentData.section
      ]
    );

    return {
      id: result.insertId,
      ...studentData,
      created_at: new Date()
    };
  } catch (error) {
    console.error(`Error creating student for tenant ${tenantInfo.id}:`, error);
    throw error;
  }
};

/**
 * Update student
 * @param {Object} tenantInfo - Tenant information from middleware
 * @param {number} studentId - Student ID
 * @param {Object} studentData - Updated student data
 * @returns {Promise<Object>} Updated student
 */
export const updateStudent = async (tenantInfo, studentId, studentData) => {
  try {
    const query = `
      UPDATE students 
      SET first_name = ?, last_name = ?, email = ?, phone = ?, class = ?, section = ?
      WHERE id = ?
    `;
    
    await executeTenantQuery(
      tenantInfo.id,
      tenantInfo.db_config,
      query,
      [
        studentData.first_name,
        studentData.last_name,
        studentData.email,
        studentData.phone,
        studentData.class,
        studentData.section,
        studentId
      ]
    );

    return {
      id: studentId,
      ...studentData
    };
  } catch (error) {
    console.error(`Error updating student ${studentId} for tenant ${tenantInfo.id}:`, error);
    throw error;
  }
};

/**
 * Delete student
 * @param {Object} tenantInfo - Tenant information from middleware
 * @param {number} studentId - Student ID
 * @returns {Promise<Boolean>} Success status
 */
export const deleteStudent = async (tenantInfo, studentId) => {
  try {
    const query = 'DELETE FROM students WHERE id = ?';
    
    const result = await executeTenantQuery(
      tenantInfo.id,
      tenantInfo.db_config,
      query,
      [studentId]
    );

    return result.affectedRows > 0;
  } catch (error) {
    console.error(`Error deleting student ${studentId} for tenant ${tenantInfo.id}:`, error);
    throw error;
  }
};

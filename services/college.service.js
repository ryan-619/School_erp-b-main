import { executeTenantQuery } from '../config/tenantDB.js';

/**
 * College Service
 * Business logic for college operations in tenant database
 */

/**
 * Get all colleges for a tenant
 * @param {Object} tenantInfo - Tenant information from middleware
 * @returns {Promise<Array>} List of colleges
 */
export const getAllColleges = async (tenantInfo) => {
  try {
    const query = 'SELECT * FROM colleges ORDER BY created_at DESC';
    const colleges = await executeTenantQuery(
      tenantInfo.id,
      tenantInfo.db_config,
      query
    );
    return colleges;
  } catch (error) {
    console.error(`Error fetching colleges for tenant ${tenantInfo.id}:`, error);
    throw error;
  }
};

/**
 * Get college by ID
 * @param {Object} tenantInfo - Tenant information from middleware
 * @param {number} collegeId - College ID
 * @returns {Promise<Object>} College data
 */
export const getCollegeById = async (tenantInfo, collegeId) => {
  try {
    const query = 'SELECT * FROM colleges WHERE id = ?';
    const colleges = await executeTenantQuery(
      tenantInfo.id,
      tenantInfo.db_config,
      query,
      [collegeId]
    );
    return colleges[0] || null;
  } catch (error) {
    console.error(`Error fetching college ${collegeId} for tenant ${tenantInfo.id}:`, error);
    throw error;
  }
};

/**
 * Get college by code
 * @param {Object} tenantInfo - Tenant information from middleware
 * @param {string} code - College code
 * @returns {Promise<Object>} College data
 */
export const getCollegeByCode = async (tenantInfo, code) => {
  try {
    const query = 'SELECT * FROM colleges WHERE code = ?';
    const colleges = await executeTenantQuery(
      tenantInfo.id,
      tenantInfo.db_config,
      query,
      [code]
    );
    return colleges[0] || null;
  } catch (error) {
    console.error(`Error fetching college by code ${code} for tenant ${tenantInfo.id}:`, error);
    throw error;
  }
};

/**
 * Create a new college
 * @param {Object} tenantInfo - Tenant information from middleware
 * @param {Object} collegeData - College data
 * @returns {Promise<Object>} Created college
 */
export const createCollege = async (tenantInfo, collegeData) => {
  try {
    const query = `
      INSERT INTO colleges (
        name, code, email, phone, address, city, state, pincode, website,
        principal_name, principal_email, principal_phone, established_year,
        affiliation, type, status, description, created_at
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())
    `;
    
    const result = await executeTenantQuery(
      tenantInfo.id,
      tenantInfo.db_config,
      query,
      [
        collegeData.name,
        collegeData.code,
        collegeData.email,
        collegeData.phone || null,
        collegeData.address || null,
        collegeData.city || null,
        collegeData.state || null,
        collegeData.pincode || null,
        collegeData.website || null,
        collegeData.principal_name || null,
        collegeData.principal_email || null,
        collegeData.principal_phone || null,
        collegeData.established_year || null,
        collegeData.affiliation || null,
        collegeData.type || 'Private',
        collegeData.status || 'active',
        collegeData.description || null
      ]
    );

    return {
      id: result.insertId,
      ...collegeData,
      created_at: new Date()
    };
  } catch (error) {
    console.error(`Error creating college for tenant ${tenantInfo.id}:`, error);
    throw error;
  }
};

/**
 * Update college
 * @param {Object} tenantInfo - Tenant information from middleware
 * @param {number} collegeId - College ID
 * @param {Object} collegeData - Updated college data
 * @returns {Promise<Object>} Updated college
 */
export const updateCollege = async (tenantInfo, collegeId, collegeData) => {
  try {
    // Build dynamic update query based on provided fields
    const updateFields = [];
    const values = [];

    // Define updateable fields
    const allowedFields = [
      'name', 'code', 'email', 'phone', 'address', 'city', 'state', 
      'pincode', 'website', 'principal_name', 'principal_email', 
      'principal_phone', 'established_year', 'affiliation', 'type', 
      'status', 'description'
    ];

    allowedFields.forEach(field => {
      if (field in collegeData && collegeData[field] !== undefined) {
        updateFields.push(`${field} = ?`);
        values.push(collegeData[field]);
      }
    });

    if (updateFields.length === 0) {
      throw new Error('No fields provided for update');
    }

    updateFields.push('updated_at = NOW()');
    values.push(collegeId);

    const query = `
      UPDATE colleges 
      SET ${updateFields.join(', ')}
      WHERE id = ?
    `;
    
    await executeTenantQuery(
      tenantInfo.id,
      tenantInfo.db_config,
      query,
      values
    );

    // Fetch and return updated college
    return await getCollegeById(tenantInfo, collegeId);
  } catch (error) {
    console.error(`Error updating college ${collegeId} for tenant ${tenantInfo.id}:`, error);
    throw error;
  }
};

/**
 * Delete college
 * @param {Object} tenantInfo - Tenant information from middleware
 * @param {number} collegeId - College ID
 * @returns {Promise<Boolean>} Success status
 */
export const deleteCollege = async (tenantInfo, collegeId) => {
  try {
    const query = 'DELETE FROM colleges WHERE id = ?';
    
    const result = await executeTenantQuery(
      tenantInfo.id,
      tenantInfo.db_config,
      query,
      [collegeId]
    );

    return result.affectedRows > 0;
  } catch (error) {
    console.error(`Error deleting college ${collegeId} for tenant ${tenantInfo.id}:`, error);
    throw error;
  }
};

/**
 * Search colleges
 * @param {Object} tenantInfo - Tenant information from middleware
 * @param {string} searchTerm - Search term
 * @returns {Promise<Array>} Matching colleges
 */
export const searchColleges = async (tenantInfo, searchTerm) => {
  try {
    const query = `
      SELECT * FROM colleges 
      WHERE name LIKE ? OR code LIKE ? OR city LIKE ? OR affiliation LIKE ?
      ORDER BY name ASC
    `;
    
    const searchPattern = `%${searchTerm}%`;
    const colleges = await executeTenantQuery(
      tenantInfo.id,
      tenantInfo.db_config,
      query,
      [searchPattern, searchPattern, searchPattern, searchPattern]
    );
    return colleges;
  } catch (error) {
    console.error(`Error searching colleges for tenant ${tenantInfo.id}:`, error);
    throw error;
  }
};

/**
 * Get colleges by status
 * @param {Object} tenantInfo - Tenant information from middleware
 * @param {string} status - Status filter
 * @returns {Promise<Array>} Colleges with specified status
 */
export const getCollegesByStatus = async (tenantInfo, status) => {
  try {
    const query = 'SELECT * FROM colleges WHERE status = ? ORDER BY name ASC';
    const colleges = await executeTenantQuery(
      tenantInfo.id,
      tenantInfo.db_config,
      query,
      [status]
    );
    return colleges;
  } catch (error) {
    console.error(`Error fetching colleges by status ${status} for tenant ${tenantInfo.id}:`, error);
    throw error;
  }
};

/**
 * Get colleges by type
 * @param {Object} tenantInfo - Tenant information from middleware
 * @param {string} type - College type
 * @returns {Promise<Array>} Colleges of specified type
 */
export const getCollegesByType = async (tenantInfo, type) => {
  try {
    const query = 'SELECT * FROM colleges WHERE type = ? ORDER BY name ASC';
    const colleges = await executeTenantQuery(
      tenantInfo.id,
      tenantInfo.db_config,
      query,
      [type]
    );
    return colleges;
  } catch (error) {
    console.error(`Error fetching colleges by type ${type} for tenant ${tenantInfo.id}:`, error);
    throw error;
  }
};

export default {
  getAllColleges,
  getCollegeById,
  getCollegeByCode,
  createCollege,
  updateCollege,
  deleteCollege,
  searchColleges,
  getCollegesByStatus,
  getCollegesByType
};

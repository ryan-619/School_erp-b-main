import { getCentralPool } from '../config/database.js';
import {
  createTenantDatabase,
  deleteTenantDatabase,
  tenantDatabaseExists,
  syncSchoolToCentralDB,
  getSchoolDatabaseConfig
} from '../utils/tenantDatabaseHelper.js';

/**
 * School Controller
 * Handles school management operations (create, read, update, delete)
 */

/**
 * Get all schools from central database
 * GET /api/schools
 * Accessible to superadmin only
 */
export const getAllSchools = async (req, res) => {
  try {
    const pool = getCentralPool();
    const connection = await pool.getConnection();

    const [schools] = await connection.query(
      `SELECT id, school_name, domain, db_name, status, ssl_enabled, created_at FROM schools ORDER BY created_at DESC`
    );
    connection.release();

    res.json({
      success: true,
      message: 'Schools fetched successfully',
      count: schools.length,
      data: schools
    });
  } catch (error) {
    console.error('Error fetching schools:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching schools',
      error: error.message
    });
  }
};

/**
 * Get school by ID
 * GET /api/schools/:id
 */
export const getSchoolById = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = getCentralPool();
    const connection = await pool.getConnection();

    const [schools] = await connection.query(
      `SELECT id, school_name, domain, db_name, status, ssl_enabled, created_at FROM schools WHERE id = ?`,
      [id]
    );
    connection.release();

    if (schools.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'School not found',
        id
      });
    }

    res.json({
      success: true,
      message: 'School fetched successfully',
      data: schools[0]
    });
  } catch (error) {
    console.error('Error fetching school:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching school',
      error: error.message
    });
  }
};

/**
 * Get school by domain
 * GET /api/schools/domain/:domain
 */
export const getSchoolByDomain = async (req, res) => {
  try {
    const { domain } = req.params;
    const pool = getCentralPool();
    const connection = await pool.getConnection();

    const [schools] = await connection.query(
      `SELECT id, school_name, domain, db_name, status, ssl_enabled, created_at FROM schools WHERE domain = ?`,
      [domain]
    );
    connection.release();

    if (schools.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'School not found',
        domain
      });
    }

    res.json({
      success: true,
      message: 'School fetched successfully',
      data: schools[0]
    });
  } catch (error) {
    console.error('Error fetching school by domain:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching school',
      error: error.message
    });
  }
};

/**
 * Create a new school with separate database
 * POST /api/schools
 * Body: {
 *   school_name: string,
 *   domain: string,
 *   db_name: string,
 *   db_user: string,
 *   db_password: string,
 *   ssl_enabled?: boolean,
 *   ssl_ca?: string,
 *   ssl_cert?: string,
 *   ssl_key?: string
 * }
 */
export const createSchool = async (req, res) => {
  const connection = await getCentralPool().getConnection();

  try {
    const {
      school_name,
      domain,
      db_name,
      db_user,
      db_password,
      ssl_enabled = false,
      ssl_ca,
      ssl_cert,
      ssl_key
    } = req.body;

    // Validation
    if (!school_name || !domain || !db_name || !db_user || !db_password) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: school_name, domain, db_name, db_user, db_password'
      });
    }

    // Check if domain already exists
    const [existingDomain] = await connection.query(
      `SELECT id FROM schools WHERE domain = ?`,
      [domain]
    );

    if (existingDomain.length > 0) {
      return res.status(409).json({
        success: false,
        message: 'School with this domain already exists'
      });
    }

    // Check if database name already exists
    const [existingDb] = await connection.query(
      `SELECT id FROM schools WHERE db_name = ?`,
      [db_name]
    );

    if (existingDb.length > 0) {
      return res.status(409).json({
        success: false,
        message: 'Database with this name already exists'
      });
    }

    // Create the tenant database
    const dbConfig = {
      host: process.env.CENTRAL_DB_HOST || 'localhost',
      user: process.env.CENTRAL_DB_USER || 'root',
      password: process.env.CENTRAL_DB_PASSWORD || 'Admire@raj21',
      port: process.env.CENTRAL_DB_PORT || 3306,
      ssl: ssl_enabled ? { ca: ssl_ca, cert: ssl_cert, key: ssl_key } : false
    };

    await createTenantDatabase(dbConfig, db_name);

    // Insert school information into central database
    const [result] = await connection.query(
      `INSERT INTO schools (school_name, domain, db_name, db_user, db_password, status, ssl_enabled, ssl_ca, ssl_cert, ssl_key, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())`,
      [
        school_name,
        domain,
        db_name,
        db_user,
        db_password,
        'active',
        ssl_enabled,
        ssl_ca || null,
        ssl_cert || null,
        ssl_key || null
      ]
    );

    connection.release();

    res.status(201).json({
      success: true,
      message: 'School created successfully with separate database',
      data: {
        id: result.insertId,
        school_name,
        domain,
        db_name,
        status: 'active',
        ssl_enabled,
        created_at: new Date()
      }
    });
  } catch (error) {
    connection.release();
    console.error('Error creating school:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating school',
      error: error.message
    });
  }
};

/**
 * Update school information
 * PUT /api/schools/:id
 * Body: Partial school data to update
 */
export const updateSchool = async (req, res) => {
  const connection = await getCentralPool().getConnection();

  try {
    const { id } = req.params;
    const updates = req.body;

    // Check if school exists
    const [schools] = await connection.query(
      `SELECT * FROM schools WHERE id = ?`,
      [id]
    );

    if (schools.length === 0) {
      connection.release();
      return res.status(404).json({
        success: false,
        message: 'School not found',
        id
      });
    }

    const school = schools[0];
    const allowedFields = ['school_name', 'domain', 'db_password', 'status', 'ssl_enabled', 'ssl_ca', 'ssl_cert', 'ssl_key'];
    
    const updateFields = [];
    const updateValues = [];

    for (const field of allowedFields) {
      if (field in updates && updates[field] !== undefined) {
        updateFields.push(`${field} = ?`);
        updateValues.push(updates[field]);
      }
    }

    if (updateFields.length === 0) {
      connection.release();
      return res.status(400).json({
        success: false,
        message: 'No valid fields to update'
      });
    }

    // Check domain uniqueness if being updated
    if (updates.domain && updates.domain !== school.domain) {
      const [existingDomain] = await connection.query(
        `SELECT id FROM schools WHERE domain = ?`,
        [updates.domain]
      );
      if (existingDomain.length > 0) {
        connection.release();
        return res.status(409).json({
          success: false,
          message: 'School with this domain already exists'
        });
      }
    }

    updateValues.push(id);

    const [result] = await connection.query(
      `UPDATE schools SET ${updateFields.join(', ')} WHERE id = ?`,
      updateValues
    );

    connection.release();

    res.json({
      success: true,
      message: 'School updated successfully',
      data: {
        id,
        ...updates,
        updated_at: new Date()
      }
    });
  } catch (error) {
    connection.release();
    console.error('Error updating school:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating school',
      error: error.message
    });
  }
};

/**
 * Delete school and its database
 * DELETE /api/schools/:id
 * Optional body: { deleteDatabase: boolean } - default: true
 */
export const deleteSchool = async (req, res) => {
  const connection = await getCentralPool().getConnection();

  try {
    const { id } = req.params;
    const { deleteDatabase = true } = req.body || {};

    // Fetch school details
    const [schools] = await connection.query(
      `SELECT * FROM schools WHERE id = ?`,
      [id]
    );

    if (schools.length === 0) {
      connection.release();
      return res.status(404).json({
        success: false,
        message: 'School not found',
        id
      });
    }

    const school = schools[0];

    // Delete the tenant database if requested
    if (deleteDatabase) {
      const dbConfig = {
        host: process.env.CENTRAL_DB_HOST || 'localhost',
        user: process.env.CENTRAL_DB_USER || 'root',
        password: process.env.CENTRAL_DB_PASSWORD || 'Admire@raj21',
        port: process.env.CENTRAL_DB_PORT || 3306
      };

      await deleteTenantDatabase(dbConfig, school.db_name);
    }

    // Delete school from central database
    const [result] = await connection.query(
      `DELETE FROM schools WHERE id = ?`,
      [id]
    );

    connection.release();

    res.json({
      success: true,
      message: 'School deleted successfully',
      data: {
        id,
        school_name: school.school_name,
        database_deleted: deleteDatabase,
        deleted_at: new Date()
      }
    });
  } catch (error) {
    connection.release();
    console.error('Error deleting school:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting school',
      error: error.message
    });
  }
};

/**
 * Verify school database connectivity
 * GET /api/schools/:id/verify
 */
export const verifySchoolDatabase = async (req, res) => {
  try {
    const { id } = req.params;

    const pool = getCentralPool();
    const connection = await pool.getConnection();

    const [schools] = await connection.query(
      `SELECT * FROM schools WHERE id = ?`,
      [id]
    );
    connection.release();

    if (schools.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'School not found'
      });
    }

    const school = schools[0];
    const dbExists = await tenantDatabaseExists(
      {
        host: process.env.CENTRAL_DB_HOST || 'localhost',
        user: school.db_user,
        password: school.db_password,
        port: process.env.CENTRAL_DB_PORT || 3306
      },
      school.db_name
    );

    res.json({
      success: true,
      message: 'School database verification completed',
      data: {
        id: school.id,
        school_name: school.school_name,
        domain: school.domain,
        db_name: school.db_name,
        database_exists: dbExists,
        status: school.status
      }
    });
  } catch (error) {
    console.error('Error verifying school database:', error);
    res.status(500).json({
      success: false,
      message: 'Error verifying school database',
      error: error.message
    });
  }
};

/**
 * Get school statistics
 * GET /api/schools/:id/stats
 */
export const getSchoolStats = async (req, res) => {
  try {
    const { id } = req.params;

    const pool = getCentralPool();
    const centralConnection = await pool.getConnection();

    // Get school info
    const [schools] = await centralConnection.query(
      `SELECT * FROM schools WHERE id = ?`,
      [id]
    );
    centralConnection.release();

    if (schools.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'School not found'
      });
    }

    const school = schools[0];

    // Try to get stats from tenant database
    let stats = {
      colleges: 0,
      students: 0,
      teachers: 0
    };

    try {
      const dbConfig = {
        host: process.env.CENTRAL_DB_HOST || 'localhost',
        user: school.db_user,
        password: school.db_password,
        database: school.db_name,
        port: process.env.CENTRAL_DB_PORT || 3306
      };

      const tenantPool = await import('../config/tenantDB.js').then(m => 
        m.getTenantConnection(school.db_name, dbConfig)
      );

      const tenantConnection = await tenantPool.getConnection();

      const [colleges] = await tenantConnection.query('SELECT COUNT(*) as count FROM colleges');
      const [students] = await tenantConnection.query('SELECT COUNT(*) as count FROM students');
      const [teachers] = await tenantConnection.query('SELECT COUNT(*) as count FROM teachers');

      stats = {
        colleges: colleges[0].count,
        students: students[0].count,
        teachers: teachers[0].count
      };

      tenantConnection.release();
    } catch (dbError) {
      console.warn(`Warning: Could not fetch stats from tenant DB: ${dbError.message}`);
    }

    res.json({
      success: true,
      message: 'School statistics retrieved',
      data: {
        id: school.id,
        school_name: school.school_name,
        domain: school.domain,
        status: school.status,
        stats
      }
    });
  } catch (error) {
    console.error('Error getting school stats:', error);
    res.status(500).json({
      success: false,
      message: 'Error getting school statistics',
      error: error.message
    });
  }
};

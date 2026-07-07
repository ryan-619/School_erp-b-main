import mysql from 'mysql2/promise';
import { getCentralPool } from '../config/database.js';

/**
 * Tenant Database Helper
 * Handles creation, deletion, and management of tenant databases
 */

/**
 * Create a new tenant database for a school
 * @param {Object} dbConfig - Database config {host, user, password, port}
 * @param {string} dbName - Database name to create
 * @returns {Promise<boolean>} Success status
 */
export const createTenantDatabase = async (dbConfig, dbName) => {
  let connection;
  try {
    // Create connection without selecting database
    const adminPool = mysql.createPool({
      host: dbConfig.host || 'localhost',
      user: dbConfig.user || 'root',
      password: dbConfig.password || 'Admire@raj21',
      port: dbConfig.port || 3306,
      ssl: dbConfig.ssl || false,
      waitForConnections: true,
      connectionLimit: 5,
      queueLimit: 0,
    });

    connection = await adminPool.getConnection();

    // Create database
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`);
    
    connection.release();
    console.log(`✓ Tenant database created: ${dbName}`);
    
    // Now create tables in the new database
    await createTenantTables(dbConfig, dbName);
    
    await adminPool.end();
    return true;
  } catch (error) {
    if (connection) connection.release();
    console.error(`✗ Error creating tenant database ${dbName}:`, error.message);
    throw error;
  }
};

/**
 * Create default tables in tenant database
 * @param {Object} dbConfig - Database config
 * @param {string} dbName - Database name
 */
export const createTenantTables = async (dbConfig, dbName) => {
  let connection;
  try {
    const pool = mysql.createPool({
      host: dbConfig.host || 'localhost',
      user: dbConfig.user || 'root',
      password: dbConfig.password || 'Admire@raj21',
      database: dbName,
      port: dbConfig.port || 3306,
      ssl: dbConfig.ssl || false,
      waitForConnections: true,
      connectionLimit: 5,
      queueLimit: 0,
    });

    connection = await pool.getConnection();

    // Create colleges table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS colleges (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL UNIQUE,
        code VARCHAR(50) NOT NULL UNIQUE,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20),
        address TEXT,
        city VARCHAR(100),
        state VARCHAR(100),
        pincode VARCHAR(10),
        website VARCHAR(255),
        principal_name VARCHAR(100),
        principal_email VARCHAR(255),
        principal_phone VARCHAR(20),
        established_year INT,
        affiliation VARCHAR(255),
        type ENUM('government', 'private', 'aided') DEFAULT 'private',
        status ENUM('active', 'inactive', 'suspended') DEFAULT 'active',
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX idx_code (code),
        INDEX idx_status (status)
      )
    `);

    // Create students table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS students (
        id INT AUTO_INCREMENT PRIMARY KEY,
        college_id INT NOT NULL,
        name VARCHAR(255),
        first_name VARCHAR(255),
        last_name VARCHAR(255),
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) DEFAULT '',
        phone VARCHAR(20),
        enrollment_number VARCHAR(50) UNIQUE,
        date_of_birth DATE,
        address TEXT,
        city VARCHAR(100),
        state VARCHAR(100),
        pincode VARCHAR(10),
        class VARCHAR(50),
        section VARCHAR(50),
        roll_number VARCHAR(50),
        role ENUM('student') DEFAULT 'student',
        status ENUM('active', 'inactive', 'graduated', 'suspended') DEFAULT 'active',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (college_id) REFERENCES colleges(id) ON DELETE CASCADE,
        INDEX idx_college_id (college_id),
        INDEX idx_email (email),
        INDEX idx_status (status),
        INDEX idx_roll_number (roll_number)
      )
    `);

    // Create teachers table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS teachers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        college_id INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        phone VARCHAR(20),
        qualification VARCHAR(255),
        subject VARCHAR(100),
        experience INT,
        status ENUM('active', 'inactive', 'on_leave', 'retired') DEFAULT 'active',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (college_id) REFERENCES colleges(id) ON DELETE CASCADE,
        INDEX idx_college_id (college_id),
        INDEX idx_email (email),
        INDEX idx_status (status)
      )
    `);

    // ============ USER MANAGEMENT TABLES FOR LOGIN/SIGNUP ============

    // Create staff table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS staff (
        id INT PRIMARY KEY AUTO_INCREMENT,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(20),
        department VARCHAR(100),
        position VARCHAR(100),
        role ENUM('staff', 'teacher', 'admin') DEFAULT 'staff',
        status ENUM('active', 'inactive') DEFAULT 'active',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        
        INDEX idx_email (email),
        INDEX idx_role (role),
        INDEX idx_status (status),
        INDEX idx_department (department)
      )
    `);

    // Update students table to add password and role fields if not exists
    try {
      await connection.query(`
        ALTER TABLE students ADD COLUMN password VARCHAR(255) DEFAULT '' AFTER email
      `);
    } catch (err) {
      // Column may already exist, which is fine
    }

    try {
      await connection.query(`
        ALTER TABLE students ADD COLUMN role ENUM('student') DEFAULT 'student' AFTER password
      `);
    } catch (err) {
      // Column may already exist, which is fine
    }

    // Create parents table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS parents (
        id INT PRIMARY KEY AUTO_INCREMENT,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(20),
        relationship VARCHAR(50),
        student_id INT,
        role ENUM('parent') DEFAULT 'parent',
        status ENUM('active', 'inactive') DEFAULT 'active',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        
        INDEX idx_email (email),
        INDEX idx_role (role),
        INDEX idx_status (status),
        INDEX idx_student_id (student_id),
        FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE SET NULL
      )
    `);

    connection.release();
    console.log(`✓ Tenant tables created in database: ${dbName}`);
    
    await pool.end();
  } catch (error) {
    if (connection) connection.release();
    console.error(`✗ Error creating tenant tables in ${dbName}:`, error.message);
    throw error;
  }
};

/**
 * Delete a tenant database
 * @param {Object} dbConfig - Database config
 * @param {string} dbName - Database name to delete
 * @returns {Promise<boolean>} Success status
 */
export const deleteTenantDatabase = async (dbConfig, dbName) => {
  let connection;
  try {
    const adminPool = mysql.createPool({
      host: dbConfig.host || 'localhost',
      user: dbConfig.user || 'root',
      password: dbConfig.password || 'Admire@raj21',
      port: dbConfig.port || 3306,
      ssl: dbConfig.ssl || false,
      waitForConnections: true,
      connectionLimit: 5,
      queueLimit: 0,
    });

    connection = await adminPool.getConnection();

    // Drop database
    await connection.query(`DROP DATABASE IF EXISTS \`${dbName}\``);
    
    connection.release();
    console.log(`✓ Tenant database deleted: ${dbName}`);
    
    await adminPool.end();
    return true;
  } catch (error) {
    if (connection) connection.release();
    console.error(`✗ Error deleting tenant database ${dbName}:`, error.message);
    throw error;
  }
};

/**
 * Check if tenant database exists
 * @param {Object} dbConfig - Database config
 * @param {string} dbName - Database name to check
 * @returns {Promise<boolean>} Existence status
 */
export const tenantDatabaseExists = async (dbConfig, dbName) => {
  let connection;
  try {
    const adminPool = mysql.createPool({
      host: dbConfig.host || 'localhost',
      user: dbConfig.user || 'root',
      password: dbConfig.password || 'Admire@raj21',
      port: dbConfig.port || 3306,
      ssl: dbConfig.ssl || false,
      waitForConnections: true,
      connectionLimit: 5,
      queueLimit: 0,
    });

    connection = await adminPool.getConnection();

    const [rows] = await connection.query(
      `SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = ?`,
      [dbName]
    );
    
    connection.release();
    await adminPool.end();
    
    return rows.length > 0;
  } catch (error) {
    if (connection) connection.release();
    console.error(`Error checking tenant database ${dbName}:`, error.message);
    return false;
  }
};

/**
 * Sync school database info to central database
 * @param {Object} schoolData - School information
 * @returns {Promise<Object>} Saved school data
 */
export const syncSchoolToCentralDB = async (schoolData) => {
  try {
    const pool = getCentralPool();
    const connection = await pool.getConnection();

    const [result] = await connection.query(
      `INSERT INTO schools (school_name, domain, db_name, db_user, db_password, status, ssl_enabled, ssl_ca, ssl_cert, ssl_key, created_at) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())
       ON DUPLICATE KEY UPDATE 
       school_name = VALUES(school_name),
       domain = VALUES(domain),
       db_name = VALUES(db_name),
       status = VALUES(status),
       ssl_enabled = VALUES(ssl_enabled),
       ssl_ca = VALUES(ssl_ca),
       ssl_cert = VALUES(ssl_cert),
       ssl_key = VALUES(ssl_key)`,
      [
        schoolData.school_name,
        schoolData.domain,
        schoolData.db_name,
        schoolData.db_user,
        schoolData.db_password,
        schoolData.status || 'active',
        schoolData.ssl_enabled || false,
        schoolData.ssl_ca || null,
        schoolData.ssl_cert || null,
        schoolData.ssl_key || null
      ]
    );

    connection.release();

    return {
      id: result.insertId,
      ...schoolData,
      created_at: new Date()
    };
  } catch (error) {
    console.error('Error syncing school to central DB:', error.message);
    throw error;
  }
};

/**
 * Get school database credentials from central DB
 * @param {string} domain - School domain
 * @returns {Promise<Object>} School database config
 */
export const getSchoolDatabaseConfig = async (domain) => {
  try {
    const pool = getCentralPool();
    const connection = await pool.getConnection();

    const [rows] = await connection.query(
      `SELECT * FROM schools WHERE domain = ? OR id = ?`,
      [domain, domain]
    );

    connection.release();

    if (rows.length === 0) {
      return null;
    }

    const school = rows[0];
    return {
      host: 'localhost',
      user: school.db_user,
      password: school.db_password,
      database: school.db_name,
      ssl: school.ssl_enabled ? {
        ca: school.ssl_ca,
        cert: school.ssl_cert,
        key: school.ssl_key
      } : false
    };
  } catch (error) {
    console.error('Error getting school database config:', error.message);
    throw error;
  }
};

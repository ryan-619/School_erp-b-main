import { getSchoolByDomain, getAllSchools } from '../config/centralDB.js';

/**
 * Domain Controller
 * Handles domain-related queries from central database
 */

/**
 * Get school info by domain
 * GET /api/domain/:domain
 * Returns: School name, database name, and configuration
 */
export const getDomainInfo = async (req, res) => {
  try {
    const { domain } = req.params;

    if (!domain) {
      return res.status(400).json({
        success: false,
        message: 'Domain is required'
      });
    }

    const school = await getSchoolByDomain(domain);

    if (!school) {
      return res.status(404).json({
        success: false,
        message: 'School not found for domain',
        domain: domain
      });
    }

    res.json({
      success: true,
      message: 'Domain information fetched successfully',
      data: {
        id: school.id,
        school_name: school.school_name,
        domain: school.domain,
        db_name: school.db_name,
        status: school.status,
        created_at: school.created_at
      }
    });
  } catch (error) {
    console.error('Error in getDomainInfo:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching domain information',
      error: error.message
    });
  }
};

/**
 * Get all schools/domains
 * GET /api/domains
 * Returns: List of all schools with basic info
 */
export const getAllDomains = async (req, res) => {
  try {
    const schools = await getAllSchools();

    res.json({
      success: true,
      message: 'All schools fetched successfully',
      count: schools.length,
      data: schools
    });
  } catch (error) {
    console.error('Error in getAllDomains:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching schools',
      error: error.message
    });
  }
};

/**
 * Get current request domain info
 * GET /api/domain
 * Returns: School info for the current request's domain
 * Used to get info about the school making the request
 */
export const getCurrentDomainInfo = async (req, res) => {
  try {
    // Extract domain from request
    const domain = req.get('host')?.split(':')[0];

    if (!domain) {
      return res.status(400).json({
        success: false,
        message: 'Unable to determine domain from request'
      });
    }

    const school = await getSchoolByDomain(domain);

    if (!school) {
      return res.status(404).json({
        success: false,
        message: 'School not found for domain',
        domain: domain
      });
    }

    res.json({
      success: true,
      message: 'Current domain information fetched successfully',
      data: {
        id: school.id,
        school_name: school.school_name,
        domain: school.domain,
        db_name: school.db_name,
        status: school.status,
        created_at: school.created_at
      }
    });
  } catch (error) {
    console.error('Error in getCurrentDomainInfo:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching current domain information',
      error: error.message
    });
  }
};

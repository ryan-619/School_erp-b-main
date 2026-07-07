import { getCentralDB } from '../config/centralDB.js';
import { getTenantDB } from '../config/tenantDB.js';
import { schoolSchema } from '../models/centralModels.js';

export const tenantResolver = async (req, res, next) => {
  try {
    const domain = req.get('host')?.split(':')[0];
    const centralDB = getCentralDB();

    let School;
    try { School = centralDB.model('School'); }
    catch { School = centralDB.model('School', schoolSchema); }

    const query = domain === 'localhost'
      ? School.findOne({ status: 'active' })
      : School.findOne({ domain, status: 'active' });

    const school = await query;

    if (!school) {
      return res.status(404).json({ success: false, message: `School not found for domain: ${domain}` });
    }

    const tenantDB = await getTenantDB(school._id.toString(), school.mongo_uri);

    req.tenant = {
      id: school._id.toString(),
      school_name: school.school_name,
      domain: school.domain,
      db: tenantDB,
    };

    next();
  } catch (error) {
    console.error('[tenantResolver] Error:', error.message);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

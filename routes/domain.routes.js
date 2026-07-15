import express from 'express';
import { getCentralDB } from '../config/centralDB.js';
import { schoolSchema } from '../models/centralModels.js';

const router = express.Router();

router.get('/domain', async (req, res) => {
  try {
    const domain = req.get('host')?.split(':')[0];
    const db = getCentralDB();
    const School = db.model('School', schoolSchema);
    const school = await School.findOne({ domain }).select('school_name domain status');
    if (!school) return res.status(404).json({ success: false, message: 'School not found' });
    res.json({ success: true, data: school });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

router.get('/domains', async (req, res) => {
  try {
    const db = getCentralDB();
    const School = db.model('School', schoolSchema);
    const schools = await School.find().select('school_name domain status');
    res.json({ success: true, data: schools });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

export default router;

import mongoose from 'mongoose';
import { getCentralDB } from '../config/centralDB.js';
import { schoolSchema } from '../models/centralModels.js';

const getSchoolModel = () => {
  const db = getCentralDB();
  try { return db.model('School'); } catch { return db.model('School', schoolSchema); }
};

const generateDbName = (schoolName) => {
  return schoolName
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .trim()
    .replace(/\s+/g, '')
    + '_db';
};

const generateMongoUri = (dbName) => {
  const centralUri = process.env.CENTRAL_MONGO_URI;
  const host = centralUri.substring(0, centralUri.lastIndexOf('/'));
  return `${host}/${dbName}`;
};


export const getAllSchools = async (req, res) => {
  try {
    const School  = getSchoolModel();
    const schools = await School.find().select('-__v').sort({ createdAt: -1 });
    res.json({ success: true, count: schools.length, data: schools });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

export const getSchoolById = async (req, res) => {
  try {
    const School = getSchoolModel();
    const school = await School.findById(req.params.id).select('-__v');
    if (!school) return res.status(404).json({ success: false, message: 'School not found' });
    res.json({ success: true, data: school });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

export const createSchool = async (req, res) => {
  try {
    const { school_name, domain } = req.body;

    if (!school_name || !domain) {
      return res.status(400).json({
        success: false,
        message: 'school_name and domain are required. mongo_uri is auto-generated from school_name.'
      });
    }

    const School = getSchoolModel();

    const domainExists = await School.findOne({ domain });
    if (domainExists) {
      return res.status(409).json({ success: false, message: `Domain '${domain}' is already registered` });
    }

    const db_name   = req.body.db_name  || generateDbName(school_name);
    const mongo_uri = generateMongoUri(db_name);

    const dbExists = await School.findOne({ mongo_uri });
    if (dbExists) {
      return res.status(409).json({
        success: false,
        message: `Database '${db_name}' already in use. Provide a custom db_name in request body.`
      });
    }

    const school = await School.create({ school_name, domain, mongo_uri });

    res.status(201).json({
      success: true,
      message: 'School created successfully',
      data: { ...school.toObject(), db_name }
    });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};


export const updateSchool = async (req, res) => {
  try {
    delete req.body.mongo_uri;
    const School = getSchoolModel();
    const school = await School.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!school) return res.status(404).json({ success: false, message: 'School not found' });
    res.json({ success: true, message: 'School updated successfully', data: school });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};


export const deleteSchool = async (req, res) => {
  try {
    const School = getSchoolModel();
    const school = await School.findByIdAndDelete(req.params.id);
    if (!school) return res.status(404).json({ success: false, message: 'School not found' });
    res.json({ success: true, message: 'School deleted successfully' });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

export const getSchoolStats = async (req, res) => {
  try {
    const School = getSchoolModel();
    const school = await School.findById(req.params.id);
    if (!school) return res.status(404).json({ success: false, message: 'School not found' });

    const tenantConn   = await mongoose.createConnection(school.mongo_uri).asPromise();
    const emptySchema  = new mongoose.Schema({}, { strict: false });
    const studentCount = await tenantConn.model('Student', emptySchema).countDocuments();
    const staffCount   = await tenantConn.model('Staff',   new mongoose.Schema({}, { strict: false })).countDocuments();
    await tenantConn.close();

    res.json({
      success: true,
      data: {
        school_name:    school.school_name,
        domain:         school.domain,
        status:         school.status,
        total_students: studentCount,
        total_staff:    staffCount,
      }
    });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

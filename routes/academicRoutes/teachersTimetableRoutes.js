import express from 'express';
import { crudFactory } from '../../utils/crudFactory.js';
import { classTimetableSchema } from '../../models/academicModels/classModel.js';

const router = express.Router();

router.get('/:teacherId', async (req, res) => {
  try {
    const db = req.tenant.db;
    let Model;
    try { Model = db.model('ClassTimetable'); } catch { Model = db.model('ClassTimetable', classTimetableSchema); }
    const data = await Model.find({ teacher_id: req.params.teacherId }).sort({ createdAt: -1 });
    res.json({ success: true, count: data.length, data });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

export default router;

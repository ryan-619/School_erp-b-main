import { studentSchema } from '../../models/studentInformationModels/studentModel.js';

export const bulkDelete = async (req, res) => {
  try {
    const { ids } = req.body;
    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ success: false, message: 'ids array is required' });
    }
    const db = req.tenant.db;
    let Student;
    try { Student = db.model('Student'); } catch { Student = db.model('Student', studentSchema); }
    const result = await Student.deleteMany({ _id: { $in: ids } });
    res.json({ success: true, message: `${result.deletedCount} students deleted` });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

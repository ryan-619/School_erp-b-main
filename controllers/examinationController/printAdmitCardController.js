import { studentSchema } from '../../models/studentInformationModels/studentModel.js';

export const printAdmitCard = async (req, res) => {
  try {
    const db = req.tenant.db;
    let Student;
    try { Student = db.model('Student'); } catch { Student = db.model('Student', studentSchema); }

    const student = await Student.findById(req.params.studentId);
    if (!student) return res.status(404).json({ success: false, message: 'Student not found' });

    res.json({ success: true, data: student });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

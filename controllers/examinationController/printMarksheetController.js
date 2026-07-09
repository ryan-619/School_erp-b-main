import { examGroupSchema, examResultSchema } from '../../models/examinationModels/examinationModel.js';

export const printMarksheet = async (req, res) => {
  try {
    const db = req.tenant.db;
    let ExamResult;
    try { ExamResult = db.model('ExamResult'); } catch { ExamResult = db.model('ExamResult', examResultSchema); }

    const data = await ExamResult.find({ student_id: req.params.studentId })
      .populate('exam_group_id', 'exam_name session')
      .populate('subject_id', 'subject_name');

    res.json({ success: true, count: data.length, data });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

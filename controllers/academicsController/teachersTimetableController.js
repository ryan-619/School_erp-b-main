import { classTimetableSchema } from '../../models/academicModels/classModel.js';

export const getTeacherTimetable = async (req, res) => {
  try {
    const db = req.tenant.db;
    let ClassTimetable;
    try { ClassTimetable = db.model('ClassTimetable'); }
    catch { ClassTimetable = db.model('ClassTimetable', classTimetableSchema); }

    const data = await ClassTimetable.find({ teacher_id: req.params.teacherId })
      .populate('class_id', 'class_name')
      .populate('section_id', 'section_name')
      .populate('subject_id', 'subject_name')
      .sort({ day: 1, period: 1 });

    res.json({ success: true, count: data.length, data });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

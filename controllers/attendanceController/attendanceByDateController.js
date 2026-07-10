import { studentAttendanceSchema } from '../../models/attendanceModels/attendanceModel.js';

export const getAttendanceByDate = async (req, res) => {
  try {
    const { attendanceDate } = req.body;
    if (!attendanceDate) return res.status(400).json({ success: false, message: 'attendanceDate is required' });

    const db = req.tenant.db;
    let Attendance;
    try { Attendance = db.model('StudentAttendance'); }
    catch { Attendance = db.model('StudentAttendance', studentAttendanceSchema); }
    const page  = Math.max(1, parseInt(req.query.page)  || 1);
    const limit = Math.min(100, parseInt(req.query.limit) || 25);
    const skip  = (page - 1) * limit;

    const start = new Date(attendanceDate); start.setHours(0,0,0,0);
    const end   = new Date(attendanceDate); end.setHours(23,59,59,999);
    const filter = { attendance_date: { $gte: start, $lte: end } };

    const [total, data] = await Promise.all([
      Attendance.countDocuments(filter),
      Attendance.find(filter)
        .populate('student_id', 'name roll_number class_id section')
        .skip(skip)
        .limit(limit)
    ]);

    const totalPages = Math.ceil(total / limit);
    res.json({
      success: true,
      data,
      pagination: { total, page, limit, totalPages, hasNextPage: page < totalPages, hasPrevPage: page > 1 }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

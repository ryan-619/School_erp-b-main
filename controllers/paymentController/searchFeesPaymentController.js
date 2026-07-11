import { studentSchema } from '../../models/studentInformationModels/studentModel.js';
import { collectFeesSchema } from '../../models/paymentModels/feesModel.js';

export const searchFeesPayment = async (req, res) => {
  try {
    const { keyword } = req.body;
    if (!keyword) return res.status(400).json({ success: false, message: 'keyword is required' });

    const db = req.tenant.db;
    let Student, CollectFees;
    try { Student     = db.model('Student');     } catch { Student     = db.model('Student', studentSchema); }
    try { CollectFees = db.model('CollectFees'); } catch { CollectFees = db.model('CollectFees', collectFeesSchema); }

    const page  = Math.max(1, parseInt(req.query.page)  || 1);
    const limit = Math.min(100, parseInt(req.query.limit) || 25);
    const skip  = (page - 1) * limit;

    const students   = await Student.find({
      $or: [
        { 'name.first': { $regex: keyword, $options: 'i' } },
        { 'name.last':  { $regex: keyword, $options: 'i' } },
        { roll_number:  { $regex: keyword, $options: 'i' } },
      ]
    });

    const studentIds = students.map(s => s._id);
    const [total, payments] = await Promise.all([
      CollectFees.countDocuments({ student_id: { $in: studentIds } }),
      CollectFees.find({ student_id: { $in: studentIds } })
        .populate('student_id', 'name roll_number class_id section')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
    ]);

    const totalPages = Math.ceil(total / limit);
    res.json({
      success: true,
      data: payments,
      pagination: { total, page, limit, totalPages, hasNextPage: page < totalPages, hasPrevPage: page > 1 }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

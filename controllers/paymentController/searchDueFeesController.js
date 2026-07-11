import { studentSchema } from '../../models/studentInformationModels/studentModel.js';
import { feesMasterSchema } from '../../models/paymentModels/feesModel.js';
import { collectFeesSchema } from '../../models/paymentModels/feesModel.js';

export const searchDueFees = async (req, res) => {
  try {
    const db = req.tenant.db;
    let Student, FeesMaster, CollectFees;
    try { Student     = db.model('Student');     } catch { Student     = db.model('Student', studentSchema); }
    try { FeesMaster  = db.model('FeesMaster');  } catch { FeesMaster  = db.model('FeesMaster', feesMasterSchema); }
    try { CollectFees = db.model('CollectFees'); } catch { CollectFees = db.model('CollectFees', collectFeesSchema); }

    const { class_id, section, session } = req.query;
    const page  = Math.max(1, parseInt(req.query.page)  || 1);
    const limit = Math.min(100, parseInt(req.query.limit) || 25);

    const studentFilter = { status: 'active' };
    if (class_id) studentFilter.class_id = class_id;
    if (section)  studentFilter.section  = section;

    const students = await Student.find(studentFilter);

    const results = await Promise.all(students.map(async (student) => {
      const feesMasterFilter = {};
      if (student.class_id) feesMasterFilter.class_id = student.class_id;
      if (session)          feesMasterFilter.session  = session;

      const feesMasters = await FeesMaster.find(feesMasterFilter);
      const totalFees   = feesMasters.reduce((sum, f) => sum + (f.amount || 0), 0);

      const payments   = await CollectFees.find({ student_id: student._id });
      const paidAmount = payments.reduce((sum, p) => sum + (p.amount || 0), 0);
      const dueAmount  = totalFees - paidAmount;

      if (dueAmount <= 0) return null;
      return {
        student_id:  student._id,
        name:        student.name,
        roll_number: student.roll_number,
        class_id:    student.class_id,
        section:     student.section,
        total_fees:  totalFees,
        paid_amount: paidAmount,
        due_amount:  dueAmount,
      };
    }));

    const dueStudents = results.filter(Boolean);
    const total       = dueStudents.length;
    const totalPages  = Math.ceil(total / limit);
    const paginated   = dueStudents.slice((page - 1) * limit, page * limit);

    res.json({
      success: true,
      data: paginated,
      pagination: { total, page, limit, totalPages, hasNextPage: page < totalPages, hasPrevPage: page > 1 }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

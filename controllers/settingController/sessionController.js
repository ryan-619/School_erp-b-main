import { crudFactory } from '../../utils/crudFactory.js';
import { sessionSchema } from '../../models/settingModels/settingModel.js';

const ctrl = crudFactory(sessionSchema, 'Session');
export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;

export const activateSession = async (req, res) => {
  try {
    const db = req.tenant.db;
    let Session;
    try { Session = db.model('Session'); } catch { Session = db.model('Session', sessionSchema); }
    await Session.updateMany({}, { status: 'Inactive' });
    const session = await Session.findByIdAndUpdate(req.params.id, { status: 'Active' }, { new: true });
    if (!session) return res.status(404).json({ success: false, message: 'Session not found' });
    res.json({ success: true, message: 'Session activated', data: session });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

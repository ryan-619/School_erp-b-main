import { crudFactory } from '../../utils/crudFactory.js';
import { userSchema } from '../../models/settingModels/settingModel.js';

const ctrl = crudFactory(userSchema, 'TenantUser');
export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;

const getModel = (db) => { try { return db.model('TenantUser'); } catch { return db.model('TenantUser', userSchema); } };

export const getByType = async (req, res) => {
  try {
    const User = getModel(req.tenant.db);
    const data = await User.find({ user_type: req.params.type });
    res.json({ success: true, count: data.length, data });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

export const updateStatus = async (req, res) => {
  try {
    const User = getModel(req.tenant.db);
    const user = await User.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });
    res.json({ success: true, data: user });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

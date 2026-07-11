import { crudFactory } from '../../utils/crudFactory.js';
import { moduleSchema } from '../../models/settingModels/settingModel.js';

const ctrl = crudFactory(moduleSchema, 'Module');
export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;

const getModel = (db) => { try { return db.model('Module'); } catch { return db.model('Module', moduleSchema); } };

export const getByType = async (req, res) => {
  try {
    const Module = getModel(req.tenant.db);
    const data = await Module.find({ module_type: req.params.type });
    res.json({ success: true, count: data.length, data });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

export const updateStatus = async (req, res) => {
  try {
    const Module = getModel(req.tenant.db);
    const mod = await Module.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    if (!mod) return res.status(404).json({ success: false, message: 'Module not found' });
    res.json({ success: true, data: mod });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

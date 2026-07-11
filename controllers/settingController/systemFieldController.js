import { crudFactory } from '../../utils/crudFactory.js';
import { systemFieldSchema } from '../../models/settingModels/settingModel.js';

const ctrl = crudFactory(systemFieldSchema, 'SystemField');
export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;

const getModel = (db) => { try { return db.model('SystemField'); } catch { return db.model('SystemField', systemFieldSchema); } };

export const getByType = async (req, res) => {
  try {
    const SystemField = getModel(req.tenant.db);
    const data = await SystemField.find({ module: req.params.type });
    res.json({ success: true, count: data.length, data });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

export const updateStatus = async (req, res) => {
  try {
    const SystemField = getModel(req.tenant.db);
    const field = await SystemField.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    if (!field) return res.status(404).json({ success: false, message: 'Field not found' });
    res.json({ success: true, data: field });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

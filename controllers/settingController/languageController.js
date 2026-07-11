import { crudFactory } from '../../utils/crudFactory.js';
import { languageSchema } from '../../models/settingModels/settingModel.js';

const ctrl = crudFactory(languageSchema, 'Language');
export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;

const getModel = (db) => { try { return db.model('Language'); } catch { return db.model('Language', languageSchema); } };

export const setActive = async (req, res) => {
  try {
    const Language = getModel(req.tenant.db);
    await Language.updateMany({}, { is_active: false });
    const lang = await Language.findByIdAndUpdate(req.params.id, { is_active: true }, { new: true });
    if (!lang) return res.status(404).json({ success: false, message: 'Language not found' });
    res.json({ success: true, message: 'Active language set', data: lang });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

export const toggleRtl = async (req, res) => {
  try {
    const Language = getModel(req.tenant.db);
    const lang = await Language.findById(req.params.id);
    if (!lang) return res.status(404).json({ success: false, message: 'Language not found' });
    lang.is_rtl = !lang.is_rtl;
    await lang.save();
    res.json({ success: true, data: lang });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

export const updateStatus = async (req, res) => {
  try {
    const Language = getModel(req.tenant.db);
    const lang = await Language.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    if (!lang) return res.status(404).json({ success: false, message: 'Language not found' });
    res.json({ success: true, data: lang });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

import { crudFactory } from '../../utils/crudFactory.js';
import { smsSettingsSchema } from '../../models/settingModels/settingModel.js';

const ctrl = crudFactory(smsSettingsSchema, 'SmsSettings');
export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;

export const activateSms = async (req, res) => {
  try {
    const db = req.tenant.db;
    let SmsSettings;
    try { SmsSettings = db.model('SmsSettings'); } catch { SmsSettings = db.model('SmsSettings', smsSettingsSchema); }
    await SmsSettings.updateMany({}, { status: 'Inactive' });
    const sms = await SmsSettings.findByIdAndUpdate(req.params.id, { status: 'Active' }, { new: true });
    if (!sms) return res.status(404).json({ success: false, message: 'SMS setting not found' });
    res.json({ success: true, message: 'SMS gateway activated', data: sms });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

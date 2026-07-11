import { crudFactory } from '../../utils/crudFactory.js';
import { paymentSettingsSchema } from '../../models/settingModels/settingModel.js';

const ctrl = crudFactory(paymentSettingsSchema, 'PaymentSettings');
export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;

export const activatePayment = async (req, res) => {
  try {
    const db = req.tenant.db;
    let PaymentSettings;
    try { PaymentSettings = db.model('PaymentSettings'); } catch { PaymentSettings = db.model('PaymentSettings', paymentSettingsSchema); }
    await PaymentSettings.updateMany({}, { status: 'Inactive' });
    const payment = await PaymentSettings.findByIdAndUpdate(req.params.id, { status: 'Active' }, { new: true });
    if (!payment) return res.status(404).json({ success: false, message: 'Payment setting not found' });
    res.json({ success: true, message: 'Payment gateway activated', data: payment });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

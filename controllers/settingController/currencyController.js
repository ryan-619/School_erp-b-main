import { crudFactory } from '../../utils/crudFactory.js';
import { currencySchema } from '../../models/settingModels/settingModel.js';

const ctrl = crudFactory(currencySchema, 'Currency');
export const getAll  = ctrl.getAll;
export const getById = ctrl.getById;
export const create  = ctrl.create;
export const update  = ctrl.update;
export const remove  = ctrl.delete;

export const setBaseCurrency = async (req, res) => {
  try {
    const db = req.tenant.db;
    let Currency;
    try { Currency = db.model('Currency'); } catch { Currency = db.model('Currency', currencySchema); }
    await Currency.updateMany({}, { is_base: false });
    const currency = await Currency.findByIdAndUpdate(req.params.id, { is_base: true }, { new: true });
    if (!currency) return res.status(404).json({ success: false, message: 'Currency not found' });
    res.json({ success: true, message: 'Base currency set', data: currency });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

export const updateStatus = async (req, res) => {
  try {
    const db = req.tenant.db;
    let Currency;
    try { Currency = db.model('Currency'); } catch { Currency = db.model('Currency', currencySchema); }
    const currency = await Currency.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    if (!currency) return res.status(404).json({ success: false, message: 'Currency not found' });
    res.json({ success: true, data: currency });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

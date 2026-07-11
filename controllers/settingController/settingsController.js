import { settingsSchema } from '../../models/settingModels/settingModel.js';

const getModel = (db) => { try { return db.model('Settings'); } catch { return db.model('Settings', settingsSchema); } };

export const getSettings = async (req, res) => {
  try {
    const Settings = getModel(req.tenant.db);
    let settings = await Settings.findOne();
    if (!settings) settings = await Settings.create({});
    res.json({ success: true, data: settings });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

export const saveSettings = async (req, res) => {
  try {
    const Settings = getModel(req.tenant.db);
    const settings = await Settings.findOneAndUpdate({}, req.body, { new: true, upsert: true });
    res.json({ success: true, message: 'Settings saved', data: settings });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
};

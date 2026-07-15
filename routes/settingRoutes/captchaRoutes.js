import express from 'express';
import { getAll, getById, create, update, remove } from '../../controllers/settingController/captchaController.js';
import { captchaSchema } from '../../models/settingModels/settingModel.js';

const router = express.Router();

router.get('/',       getAll);
router.get('/:id',    getById);
router.post('/',      create);
router.put('/:id',    update);
router.delete('/:id', remove);

router.patch('/status/:id', async (req, res) => {
  try {
    const db = req.tenant.db;
    let Captcha;
    try { Captcha = db.model('Captcha'); } catch { Captcha = db.model('Captcha', captchaSchema); }
    const captcha = await Captcha.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    if (!captcha) return res.status(404).json({ success: false, message: 'Captcha not found' });
    res.json({ success: true, data: captcha });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

export default router;

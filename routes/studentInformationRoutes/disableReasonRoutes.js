import express from 'express';
import * as controller from '../../controllers/studentInfromationController/disableReasonController.js';

const router = express.Router();

router.get('/', controller.getAll);

router.post('/', controller.create);

router.delete('/:id', controller.deleteRecord);

export default router;
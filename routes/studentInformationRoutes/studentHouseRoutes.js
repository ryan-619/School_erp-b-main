import express from 'express';
import * as controller from '../../controllers/studentInfromationController/studentHouseController.js';

const router = express.Router();

router.get('/', controller.getAll);

router.post('/', controller.create);

router.put('/:id', controller.update);

router.delete('/:id', controller.deleteRecord);

export default router;
import express from 'express';

import {
    getAllDispatch,
    createDispatch,
    updateDispatch,
    deleteDispatch
} from '../../controllers/officeController/postalDispatchController.js';

const router = express.Router();

router.get('/', getAllDispatch);

router.post('/', createDispatch);

router.put('/:id', updateDispatch);

router.delete('/:id', deleteDispatch);

export default router;
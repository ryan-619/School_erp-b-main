import express from 'express';

import {
    getAllLibraryStudents,
    getLibraryStudentById,
    createLibraryStudent,
    updateLibraryStudent,
    deleteLibraryStudent
} from '../../controllers/libraryController/libraryStudentController.js';

const router = express.Router();

router.get('/', getAllLibraryStudents);

router.get('/:id', getLibraryStudentById);

router.post('/', createLibraryStudent);

router.put('/:id', updateLibraryStudent);

router.delete('/:id', deleteLibraryStudent);

export default router;

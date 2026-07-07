import express from 'express';

import {
    getAllLibraryStaffMembers,
    getLibraryStaffMemberById,
    createLibraryStaffMember,
    updateLibraryStaffMember,
    deleteLibraryStaffMember
} from '../../controllers/libraryController/libraryStaffMemberController.js';

const router = express.Router();

router.get('/', getAllLibraryStaffMembers);

router.get('/:id', getLibraryStaffMemberById);

router.post('/', createLibraryStaffMember);

router.put('/:id', updateLibraryStaffMember);

router.delete('/:id', deleteLibraryStaffMember);

export default router;

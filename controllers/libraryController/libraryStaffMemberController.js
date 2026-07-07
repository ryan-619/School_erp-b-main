import LibraryStaffMemberModel from '../../models/libraryModels/libraryStaffMemberModel.js';

export const getAllLibraryStaffMembers = (req, res) => {
    LibraryStaffMemberModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const getLibraryStaffMemberById = (req, res) => {
    LibraryStaffMemberModel.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createLibraryStaffMember = (req, res) => {
    LibraryStaffMemberModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Library Staff Member Added',
            result
        });
    });
};

export const updateLibraryStaffMember = (req, res) => {
    LibraryStaffMemberModel.update(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Library Staff Member Updated'
        });
    });
};

export const deleteLibraryStaffMember = (req, res) => {
    LibraryStaffMemberModel.delete(req.params.id, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Library Staff Member Deleted'
        });
    });
};

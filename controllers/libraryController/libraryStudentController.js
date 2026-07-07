import LibraryStudentModel from '../../models/libraryModels/libraryStudentModel.js';

export const getAllLibraryStudents = (req, res) => {
    LibraryStudentModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const getLibraryStudentById = (req, res) => {
    LibraryStudentModel.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createLibraryStudent = (req, res) => {
    LibraryStudentModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Library Student Added',
            result
        });
    });
};

export const updateLibraryStudent = (req, res) => {
    LibraryStudentModel.update(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Library Student Updated'
        });
    });
};

export const deleteLibraryStudent = (req, res) => {
    LibraryStudentModel.delete(req.params.id, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Library Student Deleted'
        });
    });
};

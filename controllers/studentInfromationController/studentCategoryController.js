import StudentCategory from '../../models/studentInformationmodels/studentCategoryModel.js';

export const getAll = (req, res) => {
    StudentCategory.getAll((err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

export const getById = (req, res) => {
    StudentCategory.getById(req.params.id, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

export const create = (req, res) => {
    StudentCategory.create(req.body, (err, result) => {
        if (err) throw err;
        res.json({
            message: 'Category Created',
            result
        });
    });
};

export const update = (req, res) => {
    StudentCategory.update(
        req.params.id,
        req.body,
        (err, result) => {
            if (err) throw err;
            res.json({
                message: 'Category Updated',
                result
            });
        }
    );
};

export const deleteRecord = (req, res) => {
    StudentCategory.delete(req.params.id, (err, result) => {
        if (err) throw err;
        res.json({
            message: 'Category Deleted'
        });
    });
};
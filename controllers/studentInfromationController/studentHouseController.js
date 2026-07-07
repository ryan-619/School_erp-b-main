import StudentHouse from '../../models/studentInformationmodels/studentHouseModel.js';

export const getAll = (req, res) => {
    StudentHouse.getAll((err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

export const create = (req, res) => {
    StudentHouse.create(req.body, (err, result) => {
        if (err) throw err;
        res.json({
            message: 'House Created',
            result
        });
    });
};

export const update = (req, res) => {
    StudentHouse.update(
        req.params.id,
        req.body,
        (err, result) => {
            if (err) throw err;
            res.json({
                message: 'House Updated'
            });
        }
    );
};

export const deleteRecord = (req, res) => {
    StudentHouse.delete(req.params.id, (err, result) => {
        if (err) throw err;
        res.json({
            message: 'House Deleted'
        });
    });
};
import ItemModel from '../../models/inventoryModels/itemModel.js';

export const getAllItems = (req, res) => {
    ItemModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const getItemById = (req, res) => {
    ItemModel.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createItem = (req, res) => {
    ItemModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Item Added',
            result
        });
    });
};

export const updateItem = (req, res) => {
    ItemModel.update(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Item Updated'
        });
    });
};

export const deleteItem = (req, res) => {
    ItemModel.delete(req.params.id, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Item Deleted'
        });
    });
};

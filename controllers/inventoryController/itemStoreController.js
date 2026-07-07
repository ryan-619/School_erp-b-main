import ItemStoreModel from '../../models/inventoryModels/itemStoreModel.js';

export const getAllItemStores = (req, res) => {
    ItemStoreModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const getItemStoreById = (req, res) => {
    ItemStoreModel.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createItemStore = (req, res) => {
    ItemStoreModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Item Store Added',
            result
        });
    });
};

export const updateItemStore = (req, res) => {
    ItemStoreModel.update(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Item Store Updated'
        });
    });
};

export const deleteItemStore = (req, res) => {
    ItemStoreModel.delete(req.params.id, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Item Store Deleted'
        });
    });
};

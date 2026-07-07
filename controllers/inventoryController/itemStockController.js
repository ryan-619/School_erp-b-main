import ItemStockModel from '../../models/inventoryModels/itemStockModel.js';

export const getAllItemStock = (req, res) => {
    ItemStockModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const getItemStockById = (req, res) => {
    ItemStockModel.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createItemStock = (req, res) => {
    ItemStockModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Item Stock Added',
            result
        });
    });
};

export const updateItemStock = (req, res) => {
    ItemStockModel.update(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Item Stock Updated'
        });
    });
};

export const deleteItemStock = (req, res) => {
    ItemStockModel.delete(req.params.id, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Item Stock Deleted'
        });
    });
};

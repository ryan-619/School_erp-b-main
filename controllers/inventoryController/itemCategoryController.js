import ItemCategoryModel from '../../models/inventoryModels/itemCategoryModel.js';

export const getAllItemCategories = (req, res) => {
    ItemCategoryModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const getItemCategoryById = (req, res) => {
    ItemCategoryModel.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createItemCategory = (req, res) => {
    ItemCategoryModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Item Category Added',
            result
        });
    });
};

export const updateItemCategory = (req, res) => {
    ItemCategoryModel.update(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Item Category Updated'
        });
    });
};

export const deleteItemCategory = (req, res) => {
    ItemCategoryModel.delete(req.params.id, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Item Category Deleted'
        });
    });
};

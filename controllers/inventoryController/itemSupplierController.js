import ItemSupplierModel from '../../models/inventoryModels/itemSupplierModel.js';

export const getAllItemSuppliers = (req, res) => {
    ItemSupplierModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const getItemSupplierById = (req, res) => {
    ItemSupplierModel.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createItemSupplier = (req, res) => {
    ItemSupplierModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Item Supplier Added',
            result
        });
    });
};

export const updateItemSupplier = (req, res) => {
    ItemSupplierModel.update(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Item Supplier Updated'
        });
    });
};

export const deleteItemSupplier = (req, res) => {
    ItemSupplierModel.delete(req.params.id, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Item Supplier Deleted'
        });
    });
};

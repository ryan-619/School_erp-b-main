import MenuModel from '../../models/frontCmsModels/menuModel.js';

export const getAllMenus = (req, res) => {
    MenuModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const getMenuById = (req, res) => {
    MenuModel.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createMenu = (req, res) => {
    MenuModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Menu Added',
            result
        });
    });
};

export const updateMenu = (req, res) => {
    MenuModel.update(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Menu Updated'
        });
    });
};

export const deleteMenu = (req, res) => {
    MenuModel.delete(req.params.id, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Menu Deleted'
        });
    });
};

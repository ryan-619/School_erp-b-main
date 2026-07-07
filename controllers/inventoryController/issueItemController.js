import IssueItemModel from '../../models/inventoryModels/issueItemModel.js';

export const getAllIssueItems = (req, res) => {
    IssueItemModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const getIssueItemById = (req, res) => {
    IssueItemModel.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createIssueItem = (req, res) => {
    IssueItemModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Issue Item Added',
            result
        });
    });
};

export const updateIssueItem = (req, res) => {
    IssueItemModel.update(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Issue Item Updated'
        });
    });
};

export const deleteIssueItem = (req, res) => {
    IssueItemModel.delete(req.params.id, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Issue Item Deleted'
        });
    });
};

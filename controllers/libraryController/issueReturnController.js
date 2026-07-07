import IssueReturnModel from '../../models/libraryModels/issueReturnModel.js';

export const getAllIssueReturns = (req, res) => {
    IssueReturnModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const getIssueReturnById = (req, res) => {
    IssueReturnModel.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createIssueReturn = (req, res) => {
    IssueReturnModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Issue Return Added',
            result
        });
    });
};

export const updateIssueReturn = (req, res) => {
    IssueReturnModel.update(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Issue Return Updated'
        });
    });
};

export const deleteIssueReturn = (req, res) => {
    IssueReturnModel.delete(req.params.id, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Issue Return Deleted'
        });
    });
};

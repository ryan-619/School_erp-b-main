import BookListModel from '../../models/libraryModels/bookListModel.js';

export const getAllBooks = (req, res) => {
    BookListModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const getBookById = (req, res) => {
    BookListModel.getById(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

export const createBook = (req, res) => {
    BookListModel.create(req.body, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Book Added',
            result
        });
    });
};

export const updateBook = (req, res) => {
    BookListModel.update(req.params.id, req.body, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Book Updated'
        });
    });
};

export const deleteBook = (req, res) => {
    BookListModel.delete(req.params.id, (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Book Deleted'
        });
    });
};

import PrintMarksheetModel from '../../models/examinationModels/printMarksheetModel.js';

export const getStudentMarksheet = (req, res) => {

    PrintMarksheetModel.getStudentMarksheet(
        req.params.studentId,
        (err, result) => {

            if (err) return res.status(500).json(err);

            res.json(result);

        }
    );

};
import PrintAdmitCardModel from '../../models/examinationModels/printAdmitCardModel.js';

export const getStudentAdmitCard = (req, res) => {

    PrintAdmitCardModel.getStudentAdmitCard(
        req.params.studentId,
        (err, result) => {

            if (err) return res.status(500).json(err);

            res.json(result);

        }
    );

};
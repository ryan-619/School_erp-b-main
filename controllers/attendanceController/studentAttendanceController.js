import StudentAttendanceModel from '../../models/attendanceModels/studentAttendanceModel.js';

export const getAllAttendance = (req, res) => {

    StudentAttendanceModel.getAll((err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

export const getAttendanceById = (req, res) => {

    StudentAttendanceModel.getById(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

};

export const createAttendance = (req, res) => {

    StudentAttendanceModel.create(req.body, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Attendance Added Successfully',
            result
        });

    });

};

export const updateAttendance = (req, res) => {

    StudentAttendanceModel.update(
        req.params.id,
        req.body,
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: 'Attendance Updated Successfully'
            });

        }
    );

};

export const deleteAttendance = (req, res) => {

    StudentAttendanceModel.delete(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: 'Attendance Deleted Successfully'
        });

    });

};
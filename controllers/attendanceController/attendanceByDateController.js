import AttendanceByDateModel from '../../models/attendanceModels/attendanceByDateModel.js';

export const getAttendanceByDate = (req, res) => {

    const { attendance_date } = req.body;

    AttendanceByDateModel.getAttendanceByDate(
        attendance_date,
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json(result);

        }
    );

};
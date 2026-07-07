import TeachersTimetableModel from '../../models/academicModels/teachersTimetableModel.js';

export const getTeacherTimetable = (req, res) => {

    TeachersTimetableModel.getByTeacher(
        req.params.teacherId,
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json(result);

        }
    );

};

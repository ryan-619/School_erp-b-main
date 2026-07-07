import {
    createStudent,
    getStudents
} from "../../models/studentInformationmodels/studentModel.js";




// ADD STUDENT
export const addStudent = (req, res) => {

    try {

        const studentPhoto =
            req.files["student_photo"]
                ? req.files["student_photo"][0].filename
                : null;

        const guardianPhoto =
            req.files["guardian_photo"]
                ? req.files["guardian_photo"][0].filename
                : null;

        const documents =
            req.files["documents"]
                ? req.files["documents"][0].filename
                : null;


        const data = {

            roll_number: req.body.roll_number,

            class_name: req.body.class_name,
            section: req.body.section,

            first_name: req.body.first_name,
            last_name: req.body.last_name,

            gender: req.body.gender,
            dob: req.body.dob,

            category: req.body.category,
            religion: req.body.religion,
            caste: req.body.caste,

            mobile: req.body.mobile,
            email: req.body.email,

            admission_date: req.body.admission_date,

            blood_group: req.body.blood_group,
            house: req.body.house,

            height: req.body.height,
            weight: req.body.weight,

            measurement_date: req.body.measurement_date,

            route_list: req.body.route_list,
            pickup_point: req.body.pickup_point,
            fees_month: req.body.fees_month,

            hostel: req.body.hostel,
            room_no: req.body.room_no,

            guardian_type: req.body.guardian_type,
            guardian_name: req.body.guardian_name,
            guardian_relation: req.body.guardian_relation,
            guardian_email: req.body.guardian_email,
            guardian_phone: req.body.guardian_phone,
            guardian_occupation: req.body.guardian_occupation,
            guardian_address: req.body.guardian_address,

            student_photo: studentPhoto,
            guardian_photo: guardianPhoto,
            documents: documents
        };



        createStudent(data, (err, result) => {

            if (err) {

                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            res.status(201).json({
                success: true,
                message: "Student Added Successfully"
            });
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};




// GET ALL STUDENTS
export const getAllStudents = (req, res) => {

    getStudents((err, result) => {

        if (err) {

            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        res.status(200).json({
            success: true,
            data: result
        });
    });
};
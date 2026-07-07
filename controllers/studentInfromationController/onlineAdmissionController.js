import {
    createAdmission,
    getAllAdmissions
} from "../../models/studentInformationmodels/onlineAdmissionModel.js";



// ADD STUDENT
export const addAdmission = (req, res) => {

    try {

        const guardianPhoto =
            req.files["guardian_photo"]
                ? req.files["guardian_photo"][0].filename
                : null;

        const documents =
            req.files["documents"]
                ? req.files["documents"][0].filename
                : null;


        const data = {

            class_name: req.body.class_name,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            gender: req.body.gender,
            dob: req.body.dob,
            mobile: req.body.mobile,
            email: req.body.email,

            guardian_type: req.body.guardian_type,
            guardian_name: req.body.guardian_name,
            guardian_relation: req.body.guardian_relation,
            guardian_email: req.body.guardian_email,
            guardian_phone: req.body.guardian_phone,
            guardian_occupation: req.body.guardian_occupation,
            guardian_address: req.body.guardian_address,

            guardian_photo: guardianPhoto,
            documents: documents
        };


        createAdmission(data, (err, result) => {

            if (err) {

                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            res.status(201).json({
                success: true,
                message: "Student Form Submitted Successfully"
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
export const getAdmissions = (req, res) => {

    getAllAdmissions((err, result) => {

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
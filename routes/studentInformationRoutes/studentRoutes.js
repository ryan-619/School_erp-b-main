import express from "express";

import multer from "multer";

import {
    addStudent,
    getAllStudents
} from "../../controllers/studentInfromationController/studentController.js";


const router = express.Router();




// MULTER STORAGE
const storage = multer.diskStorage({

    destination: (req, file, cb) => {

        if (file.fieldname === "student_photo") {

            cb(null, "uploads/student");

        } else if (file.fieldname === "guardian_photo") {

            cb(null, "uploads/guardian");

        } else {

            cb(null, "uploads/documents");
        }
    },



    filename: (req, file, cb) => {

        cb(null, Date.now() + "-" + file.originalname);
    }
});



const upload = multer({
    storage
});




// ADD STUDENT
router.post(

    "/add",

    upload.fields([
        { name: "student_photo", maxCount: 1 },
        { name: "guardian_photo", maxCount: 1 },
        { name: "documents", maxCount: 1 }
    ]),

    addStudent
);




// GET STUDENTS
router.get("/all", getAllStudents);



export default router;
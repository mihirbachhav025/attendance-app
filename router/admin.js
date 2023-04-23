const express  =require('express');
const router  = express.Router()

const authenticationMiddleWare = require('../middleware/auth');

// router.route('/getAdmin').get(adminLogin);

router.route('/login').get((req,res)=>res.render("login"));

router.route('/home').get((req,res)=>res.render("index"));

router.route('/').get((req,res)=>res.render("index"));


//--------------------------------------------------------------------------------------------------//

const {
    editStudents, searchStudents, editStudentDetails, addStudentDetails,
    deleteStudentDetails, saveStudentDetails, editStudentDetailsEdit
} = require('../controllers/admin');

router.route('/editStudents').get(editStudents);

router.route('/searchStudents').post((req,res)=>searchStudents(req, res, 101));
router.route('/searchStudents/sem').post((req,res)=>searchStudents(req, res, 102));
router.route('/searchStudents/branch').post((req,res)=>searchStudents(req, res, 103));
router.route('/searchStudents/division').post((req,res)=>searchStudents(req, res, 105));
router.route('/searchStudents/edit').post((req,res)=>searchStudents(req, res, 104));
router.route('/searchStudents/delete').post((req,res)=>searchStudents(req, res, 106));

router.route('/editStudentDetails').post(editStudentDetails);
router.route('/editStudentDetails/edit').post(editStudentDetailsEdit);

router.route('/addStudentDetails').post(addStudentDetails);

router.route('/deleteStudentDetails').post(deleteStudentDetails);

router.route('/saveStudentDetails').post((req,res)=>saveStudentDetails(req, res, 101));
router.route('/saveStudentDetails/edit').post((req,res)=>saveStudentDetails(req, res, 102));
router.route('/saveStudentDetails/add').post((req,res)=>saveStudentDetails(req, res, 103));
router.route('/saveStudentDetails/delete').post((req,res)=>saveStudentDetails(req, res, 104));

//--------------------------------------------------------------------------------------------------//

const {
    editTeachers ,searchTeachers, editTecherDetailsEdit, 
    saveTeacherDetails, addTeacherDetails, deleteTeacherDetails
} = require('../controllers/admin');

router.route('/editTeachers').get(editTeachers);
router.route('/editTeacherDetails/edit').post(editTecherDetailsEdit);
// router.route('/editTeacherDetails/edit').post(editTecherDetailsEdit);

router.route('/addTeacherDetails').post(addTeacherDetails);

router.route('/deleteTeacherDetails').post(deleteTeacherDetails);

router.route('/searchTeachers').post((req,res)=>searchTeachers(req, res, 101));
router.route('/searchTeachers/edit').post((req,res)=>searchTeachers(req, res, 104));
router.route('/searchTeachers/delete').post((req,res)=>searchTeachers(req, res, 106));

router.route('/saveTeacherDetails/edit').post((req,res)=>saveTeacherDetails(req, res, 102));
router.route('/saveTeacherDetails/add').post((req,res)=>saveTeacherDetails(req, res, 103));
router.route('/saveTeacherDetails/delete').post((req,res)=>saveTeacherDetails(req, res, 104));

//--------------------------------------------------------------------------------------------------//

const {
    editTimetable, searchTimetable, editTimetableDetailsEdit, saveTimetableDetails, addTimetableDetails,
    deleteTimetableDetails
} = require('../controllers/admin');

router.route('/editTimetable').get(editTimetable);
router.route('/editTimetableDetails/edit').post(editTimetableDetailsEdit);

router.route('/addTimetableDetails').post(addTimetableDetails);

router.route('/deleteTimetableDetails').post(deleteTimetableDetails);

router.route('/searchTimetable').post((req,res)=>searchTimetable(req, res, 101));
router.route('/searchTimetable/edit').post((req,res)=>searchTimetable(req, res, 104));
router.route('/searchTimetable/delete').post((req,res)=>searchTimetable(req, res, 106));

router.route('/saveTimetableDetails/edit').post((req,res)=>saveTimetableDetails(req, res, 102));
router.route('/saveTimetableDetails/add').post((req,res)=>saveTimetableDetails(req, res, 103));
router.route('/saveTimetableDetails/delete').post((req,res)=>saveTimetableDetails(req, res, 104));



module.exports = router;
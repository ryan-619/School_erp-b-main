import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import { cloudinaryConnect } from './config/cloudnary.js';
import cookieParser from 'cookie-parser';
import { initCentralDB, closeAllConnections } from './config/database.js';
import { tenantResolver } from './middleware/tenantResolver.js';

/**
 * ========================
 * CENTRAL DB ROUTES (No Tenant Required)
 * ========================
 */
import authRoutes from './routes/authRoutes.js';
import domainRoutes from './routes/domain.routes.js';
import schoolRoutes from './routes/school.routes.js';
import usersRoutes from './routes/users.routes.js';
import collegeRoutes from './routes/college.routes.js';

/**
 * ========================
 * TENANT-SPECIFIC ROUTES
 * ========================
 */

// Student Information Routes
import studentRoutes from './routes/student.routes.js';
import bulkDeleteRoutes from './routes/studentInformationRoutes/bulkDeleteRoutes.js';
import disabledStudentRoutes from './routes/studentInformationRoutes/disabledStudentRoutes.js';
import disableReasonRoutes from './routes/studentInformationRoutes/disableReasonRoutes.js';
import multiClassStudentRoutes from './routes/studentInformationRoutes/multiClassStudentRoutes.js';
import onlineAdmissionRoutes from './routes/studentInformationRoutes/onlineAdmissionRoutes.js';
import studentCategoryRoutes from './routes/studentInformationRoutes/studentCategoryRoutes.js';
import studentHouseRoutes from './routes/studentInformationRoutes/studentHouseRoutes.js';
import studentDetailsRoutes from './routes/studentInformationRoutes/studentRoutes.js';

// Expenses Routes
import addExpenseRoutes from './routes/expensesRoutes/addExpenseRoutes.js';
import expenseHeadRoutes from './routes/expensesRoutes/expenseHeadRoutes.js';
import searchExpenseRoutes from './routes/expensesRoutes/searchExpenseRoutes.js';

// Office Routes
import admissionEnquiryRoutes from './routes/officeRoutes/admissionEnquiryRoutes.js';
import complaintRoutes from './routes/officeRoutes/complaintRoutes.js';
import phoneCallLogRoutes from './routes/officeRoutes/phoneCallLogRoutes.js';
import postalDispatchRoutes from './routes/officeRoutes/postalDispatchRoutes.js';
import postalReceiveRoutes from './routes/officeRoutes/postalReceiveRoutes.js';
import setupFrontOfficeRoutes from './routes/officeRoutes/setupFrontOfficeRoutes.js';
import visitorBookRoutes from './routes/officeRoutes/visitorBookRoutes.js';

// Attendance Routes
import studentAttendanceRoutes from './routes/attandanceRoutes/studentAttendanceRoutes.js';
import approveLeaveRoutes from './routes/attandanceRoutes/approveLeaveRoutes.js';
import attendanceByDateRoutes from './routes/attandanceRoutes/attendanceByDateRoutes.js';

// Academic Routes
import classRoutes from './routes/academicRoutes/classRoutes.js';
import sectionsRoutes from './routes/academicRoutes/sectionsRoutes.js';
import subjectsRoutes from './routes/academicRoutes/subjectsRoutes.js';
import subjectGroupRoutes from './routes/academicRoutes/subjectGroupRoutes.js';
import assignClassTeacherRoutes from './routes/academicRoutes/assignClassTeacherRoutes.js';
import classTimetableRoutes from './routes/academicRoutes/classTimetableRoutes.js';
import teachersTimetableRoutes from './routes/academicRoutes/teachersTimetableRoutes.js';
import promoteStudentsRoutes from './routes/academicRoutes/promoteStudentsRoutes.js';

// Income Routes
import addIncomeRoutes from './routes/incomeRoutes/addIncomeRoutes.js';
import incomeHeadRoutes from './routes/incomeRoutes/incomeHeadRoutes.js';
import searchIncomeRoutes from './routes/incomeRoutes/searchIncomeRoutes.js';

// Examination Routes
import examScheduleRoutes from './routes/examinationRoutes/examScheduleRoutes.js';
import examResultRoutes from './routes/examinationRoutes/examResultRoutes.js';
import examGroupRoutes from './routes/examinationRoutes/examGroupRoutes.js';
import marksDivisionRoutes from './routes/examinationRoutes/marksDivisionRoutes.js';
import marksGradeRoutes from './routes/examinationRoutes/marksGradeRoutes.js';
import designMarksheetRoutes from './routes/examinationRoutes/designMarksheetRoutes.js';
import designAdmitCardRoutes from './routes/examinationRoutes/designAdmitCardRoutes.js';
import printMarksheetRoutes from './routes/examinationRoutes/printMarksheetRoutes.js';
import printAdmitCardRoutes from './routes/examinationRoutes/printAdmitCardRoutes.js';

// Payment Routes
import collectFeesRoutes from './routes/paymentRoutes/collectFeesRoutes.js';
import feesCarryForwardRoutes from './routes/paymentRoutes/feesCarryForwardRoutes.js';
import feesDiscountRoutes from './routes/paymentRoutes/feesDiscountRoutes.js';
import feesGroupRoutes from './routes/paymentRoutes/feesGroupRoutes.js';
import feesMasterRoutes from './routes/paymentRoutes/feesMasterRoutes.js';
import feesReminderRoutes from './routes/paymentRoutes/feesReminderRoutes.js';
import feesTypeRoutes from './routes/paymentRoutes/feesTypeRoutes.js';
import offlineBankPaymentRoutes from './routes/paymentRoutes/offlineBankPaymentRoutes.js';
import searchDueFeesRoutes from './routes/paymentRoutes/searchDueFeesRoutes.js';
import searchFeesPaymentRoutes from './routes/paymentRoutes/searchFeesPaymentRoutes.js';

// Online Exam Routes
import onlineExamRoutes from './routes/onlineExamRoutes/onlineExamRoutes.js';
import questionBankRoutes from './routes/onlineExamRoutes/questionBankRoutes.js';

// HR Routes
import applyLeaveRoutes from './routes/hrRoutes/applyLeaveRoutes.js';
import approveLeaveRequestRoutes from './routes/hrRoutes/approveLeaveRequestRoutes.js';
import departmentRoutes from './routes/hrRoutes/departmentRoutes.js';
import designationRoutes from './routes/hrRoutes/designationRoutes.js';
import disabledStaffRoutes from './routes/hrRoutes/disabledStaffRoutes.js';
import leaveTypeRoutes from './routes/hrRoutes/leaveTypeRoutes.js';
import payrollRoutes from './routes/hrRoutes/payrollRoutes.js';
import staffAttendanceRoutes from './routes/hrRoutes/staffAttendanceRoutes.js';
import staffDirectoryRoutes from './routes/hrRoutes/staffDirectoryRoutes.js';
import teachersRatingRoutes from './routes/hrRoutes/teachersRatingRoutes.js';

// Lesson Routes
import copyOldLessonsRoutes from './routes/lessionRoutes/copyOldLessonsRoutes.js';
import lessonPlanRoutes from './routes/lessionRoutes/lessonPlanRoutes.js';
import lessonRoutes from './routes/lessionRoutes/lessonRoutes.js';
import syllabusStatusRoutes from './routes/lessionRoutes/syllabusStatusRoutes.js';
import topicRoutes from './routes/lessionRoutes/topicRoutes.js';

// Homework Routes
import addHomeworkRoutes from './routes/homeworkRoutes/addHomeworkRoutes.js';
import dailyAssignmentRoutes from './routes/homeworkRoutes/dailyAssignmentRoutes.js';

// Library Routes
import bookListRoutes from './routes/libraryRoutes/bookListRoutes.js';
import issueReturnRoutes from './routes/libraryRoutes/issueReturnRoutes.js';
import libraryStudentRoutes from './routes/libraryRoutes/libraryStudentRoutes.js';
import libraryStaffMemberRoutes from './routes/libraryRoutes/libraryStaffMemberRoutes.js';

// Inventory Routes
import issueItemRoutes from './routes/inventoryRoutes/issueItemRoutes.js';
import itemStockRoutes from './routes/inventoryRoutes/itemStockRoutes.js';
import itemRoutes from './routes/inventoryRoutes/itemRoutes.js';
import itemCategoryRoutes from './routes/inventoryRoutes/itemCategoryRoutes.js';
import itemStoreRoutes from './routes/inventoryRoutes/itemStoreRoutes.js';
import itemSupplierRoutes from './routes/inventoryRoutes/itemSupplierRoutes.js';

// Transport Routes
import transportFeesMasterRoutes from './routes/transportRoutes/transportFeesMasterRoutes.js';
import pickupPointRoutes from './routes/transportRoutes/pickupPointRoutes.js';
import transportRouteRoutes from './routes/transportRoutes/transportRouteRoutes.js';
import vehicleRoutes from './routes/transportRoutes/vehicleRoutes.js';
import assignVehicleRoutes from './routes/transportRoutes/assignVehicleRoutes.js';
import routePickupPointRoutes from './routes/transportRoutes/routePickupPointRoutes.js';
import studentTransportFeesRoutes from './routes/transportRoutes/studentTransportFeesRoutes.js';

// Hostel Routes
import hostelRoomRoutes from './routes/hostelRoutes/hostelRoomRoutes.js';
import roomTypeRoutes from './routes/hostelRoutes/roomTypeRoutes.js';
import hostelRoutes from './routes/hostelRoutes/hostelRoutes.js';

// Certificate Routes
import studentCertificateRoutes from './routes/certificateRoutes/studentCertificateRoutes.js';
import generateCertificateRoutes from './routes/certificateRoutes/generateCertificateRoutes.js';
import studentIdCardRoutes from './routes/certificateRoutes/studentIdCardRoutes.js';
import generateIdCardRoutes from './routes/certificateRoutes/generateIdCardRoutes.js';
import staffIdCardRoutes from './routes/certificateRoutes/staffIdCardRoutes.js';
import generateStaffIdCardRoutes from './routes/certificateRoutes/generateStaffIdCardRoutes.js';

// Front CMS Routes
import eventRoutes from './routes/frontCmsRoutes/eventRoutes.js';
import galleryRoutes from './routes/frontCmsRoutes/galleryRoutes.js';
import newsRoutes from './routes/frontCmsRoutes/newsRoutes.js';
import mediaManagerRoutes from './routes/frontCmsRoutes/mediaManagerRoutes.js';
import pageRoutes from './routes/frontCmsRoutes/pageRoutes.js';
import menuRoutes from './routes/frontCmsRoutes/menuRoutes.js';
import bannerImageRoutes from './routes/frontCmsRoutes/bannerImageRoutes.js';

// Alumni Routes
import manageAlumniRoutes from './routes/alumniRoutes/manageAlumniRoutes.js';
import alumniEventRoutes from './routes/alumniRoutes/alumniEventRoutes.js';

// Download Routes
import contentShareListRoutes from './routes/downloadRoutes/contentShareListRoutes.js';
import contentTypeRoutes from './routes/downloadRoutes/contentTypeRoutes.js';
import uploadShareContentRoutes from './routes/downloadRoutes/uploadShareContentRoutes.js';
import videoTutorialRoutes from './routes/downloadRoutes/videoTutorialRoutes.js';


//Settings Routes
import settingsRoutes from './routes/settingRoutes/settingsRoutes.js';
import sessionRoutes from './routes/settingRoutes/sessionRoutes.js';
import notificationRoutes from './routes/settingRoutes/notificationRoutes.js';
import smsRoutes from './routes/settingRoutes/smsRoutes.js';
import paymentRoutes from './routes/settingRoutes/paymentRoutes.js';
import frontCmsRoutes from './routes/settingRoutes/frontCmsRoutes.js';
import rolePermissionRoutes from './routes/settingRoutes/rolePermissionRoutes.js';
import moduleRoutes from './routes/settingRoutes/moduleRoutes.js';
import userRoutes from './routes/settingRoutes/userRoutes.js';
import currencyRoutes from './routes/settingRoutes/currencyRoutes.js';
import languageRoutes from './routes/settingRoutes/languageRoutes.js';
import captchaRoutes from './routes/settingRoutes/captchaRoutes.js';
import fileTyperoutes from './routes/settingRoutes/fileTypeRoutes.js';
import customFieldRoutes from './routes/settingRoutes/customFieldRoutes.js';
import systemFieldRoutes from './routes/settingRoutes/systemFieldRoutes.js';



dotenv.config();

// Initialize Express app
const app = express();
cloudinaryConnect();
// CORS Configuration
const corsOptions = {
  origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/**
 * Health Check Route
 * Test if server is running
 */
app.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date()
  });
});

/**
 * ========================
 * PUBLIC API ROUTES (Central DB - No Tenant Required)
 * ========================
 */

/**
 * Authentication Routes
 * Handles login, signup, password reset
 */
app.use('/api/auth', authRoutes);

/**
 * Domain Routes
 * Central database queries for school information
 */
app.use('/api', domainRoutes);

/**
 * School Management Routes
 * Central database queries for school management
 */
app.use('/api', schoolRoutes);

/**
 * College Routes
 * Central database queries for college management
 */
app.use('/api/college', collegeRoutes);

/**
 * Users Routes (Auth for Admin, Staff, Student, Parent)
 * Handles user login/signup for different roles
 */
app.use('/users', usersRoutes);

/**
 * ========================
 * TENANT-SPECIFIC ROUTES (Require tenantResolver middleware)
 * ========================
 */

app.use('/api', tenantResolver, studentRoutes);

/**
 * Student Information Management Routes
 */
app.use('/api/student/bulk-delete', tenantResolver, bulkDeleteRoutes);
app.use('/api/student/disabled', tenantResolver, disabledStudentRoutes);
app.use('/api/student/disable-reason', tenantResolver, disableReasonRoutes);
app.use('/api/student/multi-class', tenantResolver, multiClassStudentRoutes);
app.use('/api/student/online-admission', tenantResolver, onlineAdmissionRoutes);
app.use('/api/student/category', tenantResolver, studentCategoryRoutes);
app.use('/api/student/house', tenantResolver, studentHouseRoutes);
app.use('/api/student/details', tenantResolver, studentDetailsRoutes);

/**
 * Attendance Management Routes
 */
app.use('/api/attendance/student', tenantResolver, studentAttendanceRoutes);
app.use('/api/attendance/approve-leave', tenantResolver, approveLeaveRoutes);
app.use('/api/attendance/by-date', tenantResolver, attendanceByDateRoutes);

/**
 * Academic Management Routes
 */
app.use('/api/academic/class', tenantResolver, classRoutes);
app.use('/api/academic/sections', tenantResolver, sectionsRoutes);
app.use('/api/academic/subjects', tenantResolver, subjectsRoutes);
app.use('/api/academic/subject-group', tenantResolver, subjectGroupRoutes);
app.use('/api/academic/assign-teacher', tenantResolver, assignClassTeacherRoutes);
app.use('/api/academic/class-timetable', tenantResolver, classTimetableRoutes);
app.use('/api/academic/teacher-timetable', tenantResolver, teachersTimetableRoutes);
app.use('/api/academic/promote-students', tenantResolver, promoteStudentsRoutes);

/**
 * Income Management Routes
 */
app.use('/api/income/add', tenantResolver, addIncomeRoutes);
app.use('/api/income/head', tenantResolver, incomeHeadRoutes);
app.use('/api/income/search', tenantResolver, searchIncomeRoutes);

/**
 * Examination Management Routes
 */
app.use('/api/exam/schedule', tenantResolver, examScheduleRoutes);
app.use('/api/exam/result', tenantResolver, examResultRoutes);
app.use('/api/exam/group', tenantResolver, examGroupRoutes);
app.use('/api/exam/marks-division', tenantResolver, marksDivisionRoutes);
app.use('/api/exam/marks-grade', tenantResolver, marksGradeRoutes);
app.use('/api/exam/design-marksheet', tenantResolver, designMarksheetRoutes);
app.use('/api/exam/design-admit-card', tenantResolver, designAdmitCardRoutes);
app.use('/api/exam/print-marksheet', tenantResolver, printMarksheetRoutes);
app.use('/api/exam/print-admit-card', tenantResolver, printAdmitCardRoutes);

/**
 * Expenses Management Routes
 */
app.use('/api/expenses/add', tenantResolver, addExpenseRoutes);
app.use('/api/expenses/head', tenantResolver, expenseHeadRoutes);
app.use('/api/expenses/search', tenantResolver, searchExpenseRoutes);

/**
 * Office Management Routes
 */
app.use('/api/office/admission-enquiry', tenantResolver, admissionEnquiryRoutes);
app.use('/api/office/complaint', tenantResolver, complaintRoutes);
app.use('/api/office/phone-call-log', tenantResolver, phoneCallLogRoutes);
app.use('/api/office/postal-dispatch', tenantResolver, postalDispatchRoutes);
app.use('/api/office/postal-receive', tenantResolver, postalReceiveRoutes);
app.use('/api/office/setup', tenantResolver, setupFrontOfficeRoutes);
app.use('/api/office/visitor-book', tenantResolver, visitorBookRoutes);

/**
 * Fees & Payment Management Routes
 */
app.use('/api/fees/collect', tenantResolver, collectFeesRoutes);
app.use('/api/fees/carry-forward', tenantResolver, feesCarryForwardRoutes);
app.use('/api/fees/discount', tenantResolver, feesDiscountRoutes);
app.use('/api/fees/group', tenantResolver, feesGroupRoutes);
app.use('/api/fees/master', tenantResolver, feesMasterRoutes);
app.use('/api/fees/reminder', tenantResolver, feesReminderRoutes);
app.use('/api/fees/type', tenantResolver, feesTypeRoutes);
app.use('/api/fees/offline-payment', tenantResolver, offlineBankPaymentRoutes);
app.use('/api/fees/search-due', tenantResolver, searchDueFeesRoutes);
app.use('/api/fees/search-payment', tenantResolver, searchFeesPaymentRoutes);

/**
 * Online Exam Management Routes
 */
app.use('/api/online-exam/exam', tenantResolver, onlineExamRoutes);
app.use('/api/online-exam/question-bank', tenantResolver, questionBankRoutes);

/**
 * HR Management Routes
 */
app.use('/api/hr/apply-leave', tenantResolver, applyLeaveRoutes);
app.use('/api/hr/approve-leave', tenantResolver, approveLeaveRequestRoutes);
app.use('/api/hr/department', tenantResolver, departmentRoutes);
app.use('/api/hr/designation', tenantResolver, designationRoutes);
app.use('/api/hr/disabled-staff', tenantResolver, disabledStaffRoutes);
app.use('/api/hr/leave-type', tenantResolver, leaveTypeRoutes);
app.use('/api/hr/payroll', tenantResolver, payrollRoutes);
app.use('/api/hr/staff-attendance', tenantResolver, staffAttendanceRoutes);
app.use('/api/hr/staff-directory', tenantResolver, staffDirectoryRoutes);
app.use('/api/hr/teachers-rating', tenantResolver, teachersRatingRoutes);

/**
 * Lesson Management Routes
 */
app.use('/api/lesson/copy-old-lessons', tenantResolver, copyOldLessonsRoutes);
app.use('/api/lesson/lesson-plan', tenantResolver, lessonPlanRoutes);
app.use('/api/lesson/lesson', tenantResolver, lessonRoutes);
app.use('/api/lesson/syllabus-status', tenantResolver, syllabusStatusRoutes);
app.use('/api/lesson/topic', tenantResolver, topicRoutes);

/**
 * Homework Management Routes
 */
app.use('/api/homework/add', tenantResolver, addHomeworkRoutes);
app.use('/api/homework/daily-assignment', tenantResolver, dailyAssignmentRoutes);

/**
 * Library Management Routes
 */
app.use('/api/library/book-list', tenantResolver, bookListRoutes);
app.use('/api/library/issue-return', tenantResolver, issueReturnRoutes);
app.use('/api/library/student', tenantResolver, libraryStudentRoutes);
app.use('/api/library/staff-member', tenantResolver, libraryStaffMemberRoutes);

/**
 * Inventory Management Routes
 */
app.use('/api/inventory/issue-item', tenantResolver, issueItemRoutes);
app.use('/api/inventory/item-stock', tenantResolver, itemStockRoutes);
app.use('/api/inventory/item', tenantResolver, itemRoutes);
app.use('/api/inventory/item-category', tenantResolver, itemCategoryRoutes);
app.use('/api/inventory/item-store', tenantResolver, itemStoreRoutes);
app.use('/api/inventory/item-supplier', tenantResolver, itemSupplierRoutes);

/**
 * Transport Management Routes
 */
app.use('/api/transport/fees-master', tenantResolver, transportFeesMasterRoutes);
app.use('/api/transport/pickup-point', tenantResolver, pickupPointRoutes);
app.use('/api/transport/routes', tenantResolver, transportRouteRoutes);
app.use('/api/transport/vehicles', tenantResolver, vehicleRoutes);
app.use('/api/transport/assign-vehicle', tenantResolver, assignVehicleRoutes);
app.use('/api/transport/route-pickup-point', tenantResolver, routePickupPointRoutes);
app.use('/api/transport/student-fees', tenantResolver, studentTransportFeesRoutes);


/**
 * Hostel Management Routes
 */
app.use('/api/hostel/rooms', tenantResolver, hostelRoomRoutes);
app.use('/api/hostel/room-type', tenantResolver, roomTypeRoutes);
app.use('/api/hostel/hostel', tenantResolver, hostelRoutes);

/**
 * Certificate Management Routes
 */
app.use('/api/certificate/student-certificate', tenantResolver, studentCertificateRoutes);
app.use('/api/certificate/generate-certificate', tenantResolver, generateCertificateRoutes);
app.use('/api/certificate/student-id-card', tenantResolver, studentIdCardRoutes);
app.use('/api/certificate/generate-id-card', tenantResolver, generateIdCardRoutes);
app.use('/api/certificate/staff-id-card', tenantResolver, staffIdCardRoutes);
app.use('/api/certificate/generate-staff-id-card', tenantResolver, generateStaffIdCardRoutes);

/**
 * Front CMS Management Routes
 */
app.use('/api/front-cms/event', tenantResolver, eventRoutes);
app.use('/api/front-cms/gallery', tenantResolver, galleryRoutes);
app.use('/api/front-cms/news', tenantResolver, newsRoutes);
app.use('/api/front-cms/media-manager', tenantResolver, mediaManagerRoutes);
app.use('/api/front-cms/pages', tenantResolver, pageRoutes);
app.use('/api/front-cms/menus', tenantResolver, menuRoutes);
app.use('/api/front-cms/banner-images', tenantResolver, bannerImageRoutes);

/**
 * Alumni Management Routes
 */
app.use('/api/alumni/manage', tenantResolver, manageAlumniRoutes);
app.use('/api/alumni/events', tenantResolver, alumniEventRoutes);

/**
 * Download Management Routes
 */
app.use('/api/download/content-share-list', tenantResolver, contentShareListRoutes);
app.use('/api/download/content-type', tenantResolver, contentTypeRoutes);
app.use('/api/download/upload-share-content', tenantResolver, uploadShareContentRoutes);
app.use('/api/download/video-tutorial', tenantResolver, videoTutorialRoutes);


//settings routes 
app.use('/api/settings', tenantResolver, settingsRoutes);
app.use('/api/session', tenantResolver, sessionRoutes);
app.use('/api/notification', tenantResolver, notificationRoutes);
app.use('/api/sms', tenantResolver, smsRoutes);
app.use('/api/payment', tenantResolver, paymentRoutes);
app.use('/api/front-cms', tenantResolver, frontCmsRoutes);
app.use('/api/role-permission', tenantResolver, rolePermissionRoutes);
app.use('/api/modules', tenantResolver, moduleRoutes);
app.use('/api/users', tenantResolver, userRoutes);
app.use('/api/currency', tenantResolver, currencyRoutes);
app.use('/api/language', tenantResolver, languageRoutes);
app.use('/api/captcha', tenantResolver, captchaRoutes);
app.use('/api/file-settings', tenantResolver, fileTyperoutes);
app.use('/api/custom-fields', tenantResolver, customFieldRoutes);
app.use('/api/system-fields', tenantResolver, systemFieldRoutes);

/**
 * Error handling middleware
 */
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err.message : 'An error occurred'
  })
});

/**
 * 404 Handler
 */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Start server with database initialization
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    // Initialize database connection
    const dbStatus = await initCentralDB();
    console.log('✓ ' + dbStatus.message);
    console.log('✓ Tenant Databases Ready');
    console.log(`✓ Server Running on Port ${PORT}`);

    app.listen(PORT, () => {
      // Server started successfully
    });
  } catch (error) {
    console.error('✗ Failed to start server:', error.message);
    process.exit(1);
  }
};

// Start the server
startServer();

// Handle graceful shutdown
process.on('SIGTERM', async () => {
  console.log('Shutting down gracefully...');
  await closeAllConnections();
  process.exit(0);
});

export default app;

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { connectCentralDB } from './config/centralDB.js';
import { cloudinaryConnect } from './config/cloudinary.js';
import { tenantResolver } from './middleware/tenantResolver.js';
import { authMiddleware } from './middleware/authMiddleware.js';
import authRoutes from './routes/authRoutes.js';
import domainRoutes from './routes/domain.routes.js';
import schoolRoutes from './routes/school.routes.js';
import collegeRoutes from './routes/college.routes.js';
import usersRoutes from './routes/users.routes.js';
import studentRoutes from './routes/student.routes.js';
import studentDetailsRoutes from './routes/studentInformationRoutes/studentRoutes.js';
import bulkDeleteRoutes from './routes/studentInformationRoutes/bulkDeleteRoutes.js';
import disabledStudentRoutes from './routes/studentInformationRoutes/disabledStudentRoutes.js';
import disableReasonRoutes from './routes/studentInformationRoutes/disableReasonRoutes.js';
import multiClassStudentRoutes from './routes/studentInformationRoutes/multiClassStudentRoutes.js';
import onlineAdmissionRoutes from './routes/studentInformationRoutes/onlineAdmissionRoutes.js';
import studentCategoryRoutes from './routes/studentInformationRoutes/studentCategoryRoutes.js';
import studentHouseRoutes from './routes/studentInformationRoutes/studentHouseRoutes.js';
import classRoutes from './routes/academicRoutes/classRoutes.js';
import sectionsRoutes from './routes/academicRoutes/sectionsRoutes.js';
import subjectsRoutes from './routes/academicRoutes/subjectsRoutes.js';
import subjectGroupRoutes from './routes/academicRoutes/subjectGroupRoutes.js';
import assignClassTeacherRoutes from './routes/academicRoutes/assignClassTeacherRoutes.js';
import classTimetableRoutes from './routes/academicRoutes/classTimetableRoutes.js';
import teachersTimetableRoutes from './routes/academicRoutes/teachersTimetableRoutes.js';
import promoteStudentsRoutes from './routes/academicRoutes/promoteStudentsRoutes.js';
import studentAttendanceRoutes from './routes/attandanceRoutes/studentAttendanceRoutes.js';
import approveLeaveRoutes from './routes/attandanceRoutes/approveLeaveRoutes.js';
import attendanceByDateRoutes from './routes/attandanceRoutes/attendanceByDateRoutes.js';
import feesTypeRoutes from './routes/paymentRoutes/feesTypeRoutes.js';
import feesGroupRoutes from './routes/paymentRoutes/feesGroupRoutes.js';
import feesMasterRoutes from './routes/paymentRoutes/feesMasterRoutes.js';
import collectFeesRoutes from './routes/paymentRoutes/collectFeesRoutes.js';
import feesDiscountRoutes from './routes/paymentRoutes/feesDiscountRoutes.js';
import feesCarryForwardRoutes from './routes/paymentRoutes/feesCarryForwardRoutes.js';
import feesReminderRoutes from './routes/paymentRoutes/feesReminderRoutes.js';
import offlineBankPaymentRoutes from './routes/paymentRoutes/offlineBankPaymentRoutes.js';
import searchDueFeesRoutes from './routes/paymentRoutes/searchDueFeesRoutes.js';
import searchFeesPaymentRoutes from './routes/paymentRoutes/searchFeesPaymentRoutes.js';
import examGroupRoutes from './routes/examinationRoutes/examGroupRoutes.js';
import examScheduleRoutes from './routes/examinationRoutes/examScheduleRoutes.js';
import examResultRoutes from './routes/examinationRoutes/examResultRoutes.js';
import marksGradeRoutes from './routes/examinationRoutes/marksGradeRoutes.js';
import marksDivisionRoutes from './routes/examinationRoutes/marksDivisionRoutes.js';
import designMarksheetRoutes from './routes/examinationRoutes/designMarksheetRoutes.js';
import designAdmitCardRoutes from './routes/examinationRoutes/designAdmitCardRoutes.js';
import printMarksheetRoutes from './routes/examinationRoutes/printMarksheetRoutes.js';
import printAdmitCardRoutes from './routes/examinationRoutes/printAdmitCardRoutes.js';
import staffDirectoryRoutes from './routes/hrRoutes/staffDirectoryRoutes.js';
import departmentRoutes from './routes/hrRoutes/departmentRoutes.js';
import designationRoutes from './routes/hrRoutes/designationRoutes.js';
import leaveTypeRoutes from './routes/hrRoutes/leaveTypeRoutes.js';
import applyLeaveRoutes from './routes/hrRoutes/applyLeaveRoutes.js';
import approveLeaveRequestRoutes from './routes/hrRoutes/approveLeaveRequestRoutes.js';
import staffAttendanceRoutes from './routes/hrRoutes/staffAttendanceRoutes.js';
import payrollRoutes from './routes/hrRoutes/payrollRoutes.js';
import teachersRatingRoutes from './routes/hrRoutes/teachersRatingRoutes.js';
import disabledStaffRoutes from './routes/hrRoutes/disabledStaffRoutes.js';
import bookListRoutes from './routes/libraryRoutes/bookListRoutes.js';
import issueReturnRoutes from './routes/libraryRoutes/issueReturnRoutes.js';
import libraryStudentRoutes from './routes/libraryRoutes/libraryStudentRoutes.js';
import libraryStaffMemberRoutes from './routes/libraryRoutes/libraryStaffMemberRoutes.js';
import transportRouteRoutes from './routes/transportRoutes/transportRouteRoutes.js';
import vehicleRoutes from './routes/transportRoutes/vehicleRoutes.js';
import pickupPointRoutes from './routes/transportRoutes/pickupPointRoutes.js';
import routePickupPointRoutes from './routes/transportRoutes/routePickupPointRoutes.js';
import assignVehicleRoutes from './routes/transportRoutes/assignVehicleRoutes.js';
import transportFeesMasterRoutes from './routes/transportRoutes/transportFeesMasterRoutes.js';
import studentTransportFeesRoutes from './routes/transportRoutes/studentTransportFeesRoutes.js';
import hostelRoutes from './routes/hostelRoutes/hostelRoutes.js';
import roomTypeRoutes from './routes/hostelRoutes/roomTypeRoutes.js';
import hostelRoomRoutes from './routes/hostelRoutes/hostelRoomRoutes.js';
import itemCategoryRoutes from './routes/inventoryRoutes/itemCategoryRoutes.js';
import itemRoutes from './routes/inventoryRoutes/itemRoutes.js';
import itemStoreRoutes from './routes/inventoryRoutes/itemStoreRoutes.js';
import itemSupplierRoutes from './routes/inventoryRoutes/itemSupplierRoutes.js';
import itemStockRoutes from './routes/inventoryRoutes/itemStockRoutes.js';
import issueItemRoutes from './routes/inventoryRoutes/issueItemRoutes.js';
import lessonRoutes from './routes/lessionRoutes/lessonRoutes.js';
import topicRoutes from './routes/lessionRoutes/topicRoutes.js';
import lessonPlanRoutes from './routes/lessionRoutes/lessonPlanRoutes.js';
import syllabusStatusRoutes from './routes/lessionRoutes/syllabusStatusRoutes.js';
import copyOldLessonsRoutes from './routes/lessionRoutes/copyOldLessonsRoutes.js';
import addHomeworkRoutes from './routes/homeworkRoutes/addHomeworkRoutes.js';
import dailyAssignmentRoutes from './routes/homeworkRoutes/dailyAssignmentRoutes.js';
import onlineExamRoutes from './routes/onlineExamRoutes/onlineExamRoutes.js';
import questionBankRoutes from './routes/onlineExamRoutes/questionBankRoutes.js';
import admissionEnquiryRoutes from './routes/officeRoutes/admissionEnquiryRoutes.js';
import complaintRoutes from './routes/officeRoutes/complaintRoutes.js';
import visitorBookRoutes from './routes/officeRoutes/visitorBookRoutes.js';
import phoneCallLogRoutes from './routes/officeRoutes/phoneCallLogRoutes.js';
import postalDispatchRoutes from './routes/officeRoutes/postalDispatchRoutes.js';
import postalReceiveRoutes from './routes/officeRoutes/postalReceiveRoutes.js';
import setupFrontOfficeRoutes from './routes/officeRoutes/setupFrontOfficeRoutes.js';
import incomeHeadRoutes from './routes/incomeRoutes/incomeHeadRoutes.js';
import addIncomeRoutes from './routes/incomeRoutes/addIncomeRoutes.js';
import searchIncomeRoutes from './routes/incomeRoutes/searchIncomeRoutes.js';
import expenseHeadRoutes from './routes/expensesRoutes/expenseHeadRoutes.js';
import addExpenseRoutes from './routes/expensesRoutes/addExpenseRoutes.js';
import searchExpenseRoutes from './routes/expensesRoutes/searchExpenseRoutes.js';
import studentCertificateRoutes from './routes/certificateRoutes/studentCertificateRoutes.js';
import generateCertificateRoutes from './routes/certificateRoutes/generateCertificateRoutes.js';
import studentIdCardRoutes from './routes/certificateRoutes/studentIdCardRoutes.js';
import generateIdCardRoutes from './routes/certificateRoutes/generateIdCardRoutes.js';
import staffIdCardRoutes from './routes/certificateRoutes/staffIdCardRoutes.js';
import generateStaffIdCardRoutes from './routes/certificateRoutes/generateStaffIdCardRoutes.js';
import eventRoutes from './routes/frontCmsRoutes/eventRoutes.js';
import galleryRoutes from './routes/frontCmsRoutes/galleryRoutes.js';
import newsRoutes from './routes/frontCmsRoutes/newsRoutes.js';
import bannerImageRoutes from './routes/frontCmsRoutes/bannerImageRoutes.js';
import pageRoutes from './routes/frontCmsRoutes/pageRoutes.js';
import menuRoutes from './routes/frontCmsRoutes/menuRoutes.js';
import mediaManagerRoutes from './routes/frontCmsRoutes/mediaManagerRoutes.js';
import manageAlumniRoutes from './routes/alumniRoutes/manageAlumniRoutes.js';
import alumniEventRoutes from './routes/alumniRoutes/alumniEventRoutes.js';
import contentTypeRoutes from './routes/downloadRoutes/contentTypeRoutes.js';
import uploadShareContentRoutes from './routes/downloadRoutes/uploadShareContentRoutes.js';
import contentShareListRoutes from './routes/downloadRoutes/contentShareListRoutes.js';
import videoTutorialRoutes from './routes/downloadRoutes/videoTutorialRoutes.js';
import settingsRoutes from './routes/settingRoutes/settingsRoutes.js';
import sessionRoutes from './routes/settingRoutes/sessionRoutes.js';
import rolePermissionRoutes from './routes/settingRoutes/rolePermissionRoutes.js';
import moduleRoutes from './routes/settingRoutes/moduleRoutes.js';
import notificationRoutes from './routes/settingRoutes/notificationRoutes.js';
import smsRoutes from './routes/settingRoutes/smsRoutes.js';
import paymentSettingsRoutes from './routes/settingRoutes/paymentRoutes.js';
import currencyRoutes from './routes/settingRoutes/currencyRoutes.js';
import languageRoutes from './routes/settingRoutes/languageRoutes.js';
import captchaRoutes from './routes/settingRoutes/captchaRoutes.js';
import fileTypeRoutes from './routes/settingRoutes/fileTypeRoutes.js';
import customFieldRoutes from './routes/settingRoutes/customFieldRoutes.js';
import systemFieldRoutes from './routes/settingRoutes/systemFieldRoutes.js';
import userSettingsRoutes from './routes/settingRoutes/userRoutes.js';
import frontCmsSettingRoutes from './routes/settingRoutes/frontCmsRoutes.js';

const app = express();
cloudinaryConnect();

const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/health', (req, res) => res.json({ success: true, message: 'Server running', db: 'MongoDB', timestamp: new Date() }));


app.use('/api/auth', authRoutes);
app.use('/api', domainRoutes);
app.use('/api', schoolRoutes);
app.use('/api/college', tenantResolver, authMiddleware, collegeRoutes);
app.use('/users', tenantResolver, usersRoutes);


const TR = [tenantResolver, authMiddleware]; 

// Students
app.use('/api',                              tenantResolver, authMiddleware, studentRoutes);
app.use('/api/student/details',              ...TR, studentDetailsRoutes);
app.use('/api/student/bulk-delete',          ...TR, bulkDeleteRoutes);
app.use('/api/student/disabled',             ...TR, disabledStudentRoutes);
app.use('/api/student/disable-reason',       ...TR, disableReasonRoutes);
app.use('/api/student/multi-class',          ...TR, multiClassStudentRoutes);
app.use('/api/student/online-admission',     tenantResolver, onlineAdmissionRoutes); 
app.use('/api/student/category',             ...TR, studentCategoryRoutes);
app.use('/api/student/house',                ...TR, studentHouseRoutes);

// Attendance
app.use('/api/attendance/student',           ...TR, studentAttendanceRoutes);
app.use('/api/attendance/approve-leave',     ...TR, approveLeaveRoutes);
app.use('/api/attendance/by-date',           ...TR, attendanceByDateRoutes);

// Academics
app.use('/api/academic/class',               ...TR, classRoutes);
app.use('/api/academic/sections',            ...TR, sectionsRoutes);
app.use('/api/academic/subjects',            ...TR, subjectsRoutes);
app.use('/api/academic/subject-group',       ...TR, subjectGroupRoutes);
app.use('/api/academic/assign-teacher',      ...TR, assignClassTeacherRoutes);
app.use('/api/academic/class-timetable',     ...TR, classTimetableRoutes);
app.use('/api/academic/teacher-timetable',   ...TR, teachersTimetableRoutes);
app.use('/api/academic/promote-students',    ...TR, promoteStudentsRoutes);

// Fees
app.use('/api/fees/type',                    ...TR, feesTypeRoutes);
app.use('/api/fees/group',                   ...TR, feesGroupRoutes);
app.use('/api/fees/master',                  ...TR, feesMasterRoutes);
app.use('/api/fees/collect',                 ...TR, collectFeesRoutes);
app.use('/api/fees/discount',                ...TR, feesDiscountRoutes);
app.use('/api/fees/carry-forward',           ...TR, feesCarryForwardRoutes);
app.use('/api/fees/reminder',                ...TR, feesReminderRoutes);
app.use('/api/fees/offline-payment',         ...TR, offlineBankPaymentRoutes);
app.use('/api/fees/search-due',              ...TR, searchDueFeesRoutes);
app.use('/api/fees/search-payment',          ...TR, searchFeesPaymentRoutes);

// Examination
app.use('/api/exam/group',                   ...TR, examGroupRoutes);
app.use('/api/exam/schedule',                ...TR, examScheduleRoutes);
app.use('/api/exam/result',                  ...TR, examResultRoutes);
app.use('/api/exam/marks-grade',             ...TR, marksGradeRoutes);
app.use('/api/exam/marks-division',          ...TR, marksDivisionRoutes);
app.use('/api/exam/design-marksheet',        ...TR, designMarksheetRoutes);
app.use('/api/exam/design-admit-card',       ...TR, designAdmitCardRoutes);
app.use('/api/exam/print-marksheet',         ...TR, printMarksheetRoutes);
app.use('/api/exam/print-admit-card',        ...TR, printAdmitCardRoutes);

// HR
app.use('/api/hr/staff-directory',           ...TR, staffDirectoryRoutes);
app.use('/api/hr/department',                ...TR, departmentRoutes);
app.use('/api/hr/designation',               ...TR, designationRoutes);
app.use('/api/hr/leave-type',                ...TR, leaveTypeRoutes);
app.use('/api/hr/apply-leave',               ...TR, applyLeaveRoutes);
app.use('/api/hr/approve-leave',             ...TR, approveLeaveRequestRoutes);
app.use('/api/hr/staff-attendance',          ...TR, staffAttendanceRoutes);
app.use('/api/hr/payroll',                   ...TR, payrollRoutes);
app.use('/api/hr/teachers-rating',           ...TR, teachersRatingRoutes);
app.use('/api/hr/disabled-staff',            ...TR, disabledStaffRoutes);

// Library
app.use('/api/library/book-list',            ...TR, bookListRoutes);
app.use('/api/library/issue-return',         ...TR, issueReturnRoutes);
app.use('/api/library/student',              ...TR, libraryStudentRoutes);
app.use('/api/library/staff-member',         ...TR, libraryStaffMemberRoutes);

// Transport
app.use('/api/transport/routes',             ...TR, transportRouteRoutes);
app.use('/api/transport/vehicles',           ...TR, vehicleRoutes);
app.use('/api/transport/pickup-point',       ...TR, pickupPointRoutes);
app.use('/api/transport/route-pickup-point', ...TR, routePickupPointRoutes);
app.use('/api/transport/assign-vehicle',     ...TR, assignVehicleRoutes);
app.use('/api/transport/fees-master',        ...TR, transportFeesMasterRoutes);
app.use('/api/transport/student-fees',       ...TR, studentTransportFeesRoutes);

// Hostel
app.use('/api/hostel/hostel',                ...TR, hostelRoutes);
app.use('/api/hostel/room-type',             ...TR, roomTypeRoutes);
app.use('/api/hostel/rooms',                 ...TR, hostelRoomRoutes);

// Inventory
app.use('/api/inventory/item-category',      ...TR, itemCategoryRoutes);
app.use('/api/inventory/item',               ...TR, itemRoutes);
app.use('/api/inventory/item-store',         ...TR, itemStoreRoutes);
app.use('/api/inventory/item-supplier',      ...TR, itemSupplierRoutes);
app.use('/api/inventory/item-stock',         ...TR, itemStockRoutes);
app.use('/api/inventory/issue-item',         ...TR, issueItemRoutes);

// Lessons
app.use('/api/lesson/lesson',                ...TR, lessonRoutes);
app.use('/api/lesson/topic',                 ...TR, topicRoutes);
app.use('/api/lesson/lesson-plan',           ...TR, lessonPlanRoutes);
app.use('/api/lesson/syllabus-status',       ...TR, syllabusStatusRoutes);
app.use('/api/lesson/copy-old-lessons',      ...TR, copyOldLessonsRoutes);

// Homework
app.use('/api/homework/add',                 ...TR, addHomeworkRoutes);
app.use('/api/homework/daily-assignment',    ...TR, dailyAssignmentRoutes);

// Online Exam
app.use('/api/online-exam/exam',             ...TR, onlineExamRoutes);
app.use('/api/online-exam/question-bank',    ...TR, questionBankRoutes);

// Front Office
app.use('/api/office/admission-enquiry',     ...TR, admissionEnquiryRoutes);
app.use('/api/office/complaint',             ...TR, complaintRoutes);
app.use('/api/office/visitor-book',          ...TR, visitorBookRoutes);
app.use('/api/office/phone-call-log',        ...TR, phoneCallLogRoutes);
app.use('/api/office/postal-dispatch',       ...TR, postalDispatchRoutes);
app.use('/api/office/postal-receive',        ...TR, postalReceiveRoutes);
app.use('/api/office/setup',                 ...TR, setupFrontOfficeRoutes);

// Income & Expenses
app.use('/api/income/head',                  ...TR, incomeHeadRoutes);
app.use('/api/income/add',                   ...TR, addIncomeRoutes);
app.use('/api/income/search',                ...TR, searchIncomeRoutes);
app.use('/api/expenses/head',                ...TR, expenseHeadRoutes);
app.use('/api/expenses/add',                 ...TR, addExpenseRoutes);
app.use('/api/expenses/search',              ...TR, searchExpenseRoutes);

// Certificates
app.use('/api/certificate/student-certificate',    ...TR, studentCertificateRoutes);
app.use('/api/certificate/generate-certificate',   ...TR, generateCertificateRoutes);
app.use('/api/certificate/student-id-card',        ...TR, studentIdCardRoutes);
app.use('/api/certificate/generate-id-card',       ...TR, generateIdCardRoutes);
app.use('/api/certificate/staff-id-card',          ...TR, staffIdCardRoutes);
app.use('/api/certificate/generate-staff-id-card', ...TR, generateStaffIdCardRoutes);

// Front CMS
app.use('/api/front-cms/event',              ...TR, eventRoutes);
app.use('/api/front-cms/gallery',            ...TR, galleryRoutes);
app.use('/api/front-cms/news',               ...TR, newsRoutes);
app.use('/api/front-cms/banner-images',      ...TR, bannerImageRoutes);
app.use('/api/front-cms/pages',              ...TR, pageRoutes);
app.use('/api/front-cms/menus',              ...TR, menuRoutes);
app.use('/api/front-cms/media-manager',      ...TR, mediaManagerRoutes);

// Alumni
app.use('/api/alumni/manage',                ...TR, manageAlumniRoutes);
app.use('/api/alumni/events',                ...TR, alumniEventRoutes);

// Downloads
app.use('/api/download/content-type',        ...TR, contentTypeRoutes);
app.use('/api/download/upload-share-content',...TR, uploadShareContentRoutes);
app.use('/api/download/content-share-list',  ...TR, contentShareListRoutes);
app.use('/api/download/video-tutorial',      ...TR, videoTutorialRoutes);

// Settings
app.use('/api/settings',                     ...TR, settingsRoutes);
app.use('/api/session',                      ...TR, sessionRoutes);
app.use('/api/role-permission',              ...TR, rolePermissionRoutes);
app.use('/api/modules',                      ...TR, moduleRoutes);
app.use('/api/notification',                 ...TR, notificationRoutes);
app.use('/api/sms',                          ...TR, smsRoutes);
app.use('/api/payment',                      ...TR, paymentSettingsRoutes);
app.use('/api/currency',                     ...TR, currencyRoutes);
app.use('/api/language',                     ...TR, languageRoutes);
app.use('/api/captcha',                      ...TR, captchaRoutes);
app.use('/api/file-settings',                ...TR, fileTypeRoutes);
app.use('/api/custom-fields',                ...TR, customFieldRoutes);
app.use('/api/system-fields',                ...TR, systemFieldRoutes);
app.use('/api/users',                        ...TR, userSettingsRoutes);
app.use('/api/front-cms',                    ...TR, frontCmsSettingRoutes);

app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err.message : 'An error occurred'
  });
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectCentralDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`MongoDB Multi-Tenant Mode Active`);
      console.log(`All routes protected with authMiddleware`);
    });
  } catch (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }
};

startServer();

process.on('SIGTERM', async () => {
  const { closeTenantConnections } = await import('./config/tenantDB.js');
  await closeTenantConnections();
  process.exit(0);
});

export default app;

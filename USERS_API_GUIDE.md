# Users Login System - API Guide

This guide covers the unified login and signup system for Admin, Staff, Student, and Parent users.

> **⚠️ IMPORTANT SETUP REQUIRED (May 11, 2026)**  
> If you're upgrading from an older version or have existing schools, you must run the database setup script first:
> ```bash
> node setup-user-tables.js
> ```
> This creates the required `staff` and `parents` tables in existing tenant databases.  
> See [USER_TABLES_SETUP_GUIDE.md](USER_TABLES_SETUP_GUIDE.md) for complete setup instructions.

## Table of Contents
1. [Admin Endpoints](#admin-endpoints)
2. [Staff Endpoints](#staff-endpoints)
3. [Student Endpoints](#student-endpoints)
4. [Parent Endpoints](#parent-endpoints)
5. [Database Setup](#database-setup)
6. [Integration](#integration)

---

## Admin Endpoints

### Admin Signup
**POST** `/users/admin/signup`

Create a new admin account (central database)

**Request Body:**
```json
{
  "email": "admin@example.com",
  "password": "Admin@123",
  "confirmPassword": "Admin@123",
  "name": "John Admin",
  "phone": "9876543210"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Admin signup successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "userType": "admin",
    "user": {
      "id": 1,
      "email": "admin@example.com",
      "name": "John Admin",
      "phone": "9876543210",
      "status": "active",
      "created_at": "2025-05-11T10:30:00Z",
      "updated_at": "2025-05-11T10:30:00Z"
    }
  }
}
```

---

### Admin Login
**POST** `/users/admin/login`

Login with admin credentials

**Request Body:**
```json
{
  "email": "admin@example.com",
  "password": "Admin@123"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "userType": "admin",
    "user": {
      "id": 1,
      "email": "admin@example.com",
      "name": "John Admin",
      "phone": "9876543210",
      "status": "active",
      "created_at": "2025-05-11T10:30:00Z",
      "updated_at": "2025-05-11T10:30:00Z"
    }
  }
}
```

---

## Staff Endpoints

### Staff Signup
**POST** `/users/staff/signup`

Create a new staff account (tenant database)

**Request Body:**
```json
{
  "email": "staff@example.com",
  "password": "Staff@123",
  "confirmPassword": "Staff@123",
  "name": "Jane Staff",
  "phone": "9876543211",
  "department": "Mathematics",
  "position": "Senior Teacher",
  "schoolId": 1
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Staff signup successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "userType": "staff",
    "user": {
      "id": 1,
      "email": "staff@example.com",
      "name": "Jane Staff",
      "phone": "9876543211",
      "department": "Mathematics",
      "position": "Senior Teacher",
      "status": "active",
      "created_at": "2025-05-11T10:30:00Z",
      "updated_at": "2025-05-11T10:30:00Z"
    }
  }
}
```

---

### Staff Login
**POST** `/users/staff/login`

Login with staff credentials

**Request Body:**
```json
{
  "email": "staff@example.com",
  "password": "Staff@123",
  "schoolId": 1
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "userType": "staff",
    "user": {
      "id": 1,
      "email": "staff@example.com",
      "name": "Jane Staff",
      "phone": "9876543211",
      "department": "Mathematics",
      "position": "Senior Teacher",
      "status": "active",
      "created_at": "2025-05-11T10:30:00Z",
      "updated_at": "2025-05-11T10:30:00Z"
    }
  }
}
```

---

## Student Endpoints

### Student Signup
**POST** `/users/student/signup`

Create a new student account (tenant database)

**Request Body:**
```json
{
  "email": "student@example.com",
  "password": "Student@123",
  "confirmPassword": "Student@123",
  "first_name": "Raj",
  "last_name": "Kumar",
  "phone": "9876543212",
  "class": "10",
  "section": "A",
  "roll_number": "101",
  "schoolId": 1
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Student signup successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "userType": "student",
    "user": {
      "id": 1,
      "email": "student@example.com",
      "first_name": "Raj",
      "last_name": "Kumar",
      "phone": "9876543212",
      "class": "10",
      "section": "A",
      "roll_number": "101",
      "status": "active",
      "created_at": "2025-05-11T10:30:00Z",
      "updated_at": "2025-05-11T10:30:00Z"
    }
  }
}
```

---

### Student Login
**POST** `/users/student/login`

Login with student credentials

**Request Body:**
```json
{
  "email": "student@example.com",
  "password": "Student@123",
  "schoolId": 1
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "userType": "student",
    "user": {
      "id": 1,
      "email": "student@example.com",
      "first_name": "Raj",
      "last_name": "Kumar",
      "phone": "9876543212",
      "class": "10",
      "section": "A",
      "roll_number": "101",
      "status": "active",
      "created_at": "2025-05-11T10:30:00Z",
      "updated_at": "2025-05-11T10:30:00Z"
    }
  }
}
```

---

## Parent Endpoints

### Parent Signup
**POST** `/users/parent/signup`

Create a new parent account (tenant database)

**Request Body:**
```json
{
  "email": "parent@example.com",
  "password": "Parent@123",
  "confirmPassword": "Parent@123",
  "name": "Mrs. Priya Kumar",
  "phone": "9876543213",
  "relationship": "Mother",
  "student_id": 1,
  "schoolId": 1
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Parent signup successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "userType": "parent",
    "user": {
      "id": 1,
      "email": "parent@example.com",
      "name": "Mrs. Priya Kumar",
      "phone": "9876543213",
      "relationship": "Mother",
      "student_id": 1,
      "status": "active",
      "created_at": "2025-05-11T10:30:00Z",
      "updated_at": "2025-05-11T10:30:00Z"
    }
  }
}
```

---

### Parent Login
**POST** `/users/parent/login`

Login with parent credentials

**Request Body:**
```json
{
  "email": "parent@example.com",
  "password": "Parent@123",
  "schoolId": 1
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "userType": "parent",
    "user": {
      "id": 1,
      "email": "parent@example.com",
      "name": "Mrs. Priya Kumar",
      "phone": "9876543213",
      "relationship": "Mother",
      "student_id": 1,
      "status": "active",
      "created_at": "2025-05-11T10:30:00Z",
      "updated_at": "2025-05-11T10:30:00Z"
    }
  }
}
```

---

## Error Responses

All endpoints return error responses in this format:

**Validation Error (400):**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    "Email is required",
    "Password must be at least 6 characters"
  ]
}
```

**Email Already Registered (409):**
```json
{
  "success": false,
  "message": "Email already registered"
}
```

**Invalid Credentials (401):**
```json
{
  "success": false,
  "message": "Invalid email or password"
}
```

**Server Error (500):**
```json
{
  "success": false,
  "message": "Server error during login"
}
```

---

## Database Setup

### 1. Create Tables

Run the SQL script to create all required tables:

```bash
mysql -u root -p < USERS_TABLES_SETUP.sql
```

### 2. Table Locations

**Central Database (school_central_db):**
- `admins` - Admin user accounts

**Tenant Databases (per school):**
- `staff` - Staff user accounts
- `parents` - Parent user accounts
- `students` - Student table (with added password field)

---

## Integration

### 1. Import Routes in index.js

Add the following to your main server file:

```javascript
import usersRoutes from './routes/users.routes.js';

// Use the routes
app.use('/users', usersRoutes);
```

### 2. Example Request with cURL

**Admin Login:**
```bash
curl -X POST http://localhost:3000/users/admin/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@example.com",
    "password": "Admin@123"
  }'
```

**Student Login:**
```bash
curl -X POST http://localhost:3000/users/student/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "student@example.com",
    "password": "Student@123",
    "schoolId": 1
  }'
```

### 3. Frontend Integration

Store the token in localStorage/sessionStorage:

```javascript
const response = await fetch('/users/student/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'student@example.com',
    password: 'Student@123',
    schoolId: 1
  })
});

const data = await response.json();
if (data.success) {
  localStorage.setItem('token', data.data.token);
  localStorage.setItem('userType', data.data.userType);
  localStorage.setItem('user', JSON.stringify(data.data.user));
}
```

---

## Password Requirements

- Minimum 6 characters
- Recommended: Mix of uppercase, lowercase, numbers, and special characters

## Email Format

- Must be a valid email format: `user@domain.com`
- Unique per user type and database

---

## Notes

- **Admin**: Stored in central database, system-wide
- **Staff**: Stored in tenant database, school-specific
- **Student**: Stored in tenant database, school-specific
- **Parent**: Stored in tenant database, school-specific
- All passwords are hashed using bcrypt
- JWT tokens expire after 7 days
- Tokens are stored in secure HTTP-only cookies

---

## Troubleshooting

**Issue:** "Database connection error"
- Solution: Ensure tenant database is initialized for the school

**Issue:** "Email already registered"
- Solution: Use a different email or reset the account

**Issue:** "Invalid email or password"
- Solution: Verify credentials are correct and account is active

---

For more information, refer to the controller files:
- `controllers/users.controller.js` - Login/Signup logic
- `models/users.model.js` - Data validation and DTOs

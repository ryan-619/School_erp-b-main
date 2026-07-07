#!/usr/bin/env node

/**
 * Auth API Testing Script (SIMPLIFIED)
 * Tests signup, login, and logout endpoints only
 * Usage: node utils/testAuth.js
 */

import http from 'http';

const BASE_URL = 'http://localhost:3000';
let token = null;

// Utility to make HTTP requests
function makeRequest(method, path, data = null, headers = {}) {
  return new Promise((resolve, reject) => {
    const url = new URL(BASE_URL + path);
    const options = {
      hostname: url.hostname,
      port: url.port,
      path: url.pathname + url.search,
      method: method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    };

    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => {
        try {
          const response = JSON.parse(body);
          resolve({ status: res.statusCode, body: response, headers: res.headers });
        } catch {
          resolve({ status: res.statusCode, body, headers: res.headers });
        }
      });
    });

    req.on('error', reject);
    if (data) req.write(JSON.stringify(data));
    req.end();
  });
}

// Helper function to print test result
function printResult(testName, passed, details = '') {
  const status = passed ? '✅ PASS' : '❌ FAIL';
  console.log(`${status} - ${testName}`);
  if (details) console.log(`   ${details}`);
}

// Test suite
async function runTests() {
  console.log('\n📋 Running Authentication API Tests\n');
  let passed = 0, failed = 0;

  // Test 1: Signup - Valid credentials
  try {
    const signupData = {
      email: `testadmin${Date.now()}@schoolerp.com`,
      password: 'Test@123456',
      confirmPassword: 'Test@123456',
      name: 'Test Admin',
      role: 'admin'
    };
    const signupRes = await makeRequest('POST', '/api/auth/signup', signupData);
    const success = signupRes.status === 201 && signupRes.body.success;
    printResult('Signup - Valid credentials', success, 
      success ? `Email: ${signupData.email}` : `Status: ${signupRes.status}`);
    if (success) {
      token = signupRes.body.data.token;
      passed++;
    } else {
      failed++;
    }
  } catch (err) {
    printResult('Signup - Valid credentials', false, err.message);
    failed++;
  }

  // Test 2: Signup - Invalid email
  try {
    const signupRes = await makeRequest('POST', '/api/auth/signup', {
      email: 'invalid-email',
      password: 'Test@123456',
      confirmPassword: 'Test@123456',
      name: 'Test Admin',
      role: 'admin'
    });
    const success = signupRes.status === 400 && !signupRes.body.success;
    printResult('Signup - Invalid email rejected', success);
    if (success) passed++; else failed++;
  } catch (err) {
    printResult('Signup - Invalid email rejected', false, err.message);
    failed++;
  }

  // Test 3: Signup - Password mismatch
  try {
    const signupRes = await makeRequest('POST', '/api/auth/signup', {
      email: `testadmin2${Date.now()}@schoolerp.com`,
      password: 'Test@123456',
      confirmPassword: 'Different@123456',
      name: 'Test Admin 2',
      role: 'admin'
    });
    const success = signupRes.status === 400 && !signupRes.body.success;
    printResult('Signup - Password mismatch rejected', success);
    if (success) passed++; else failed++;
  } catch (err) {
    printResult('Signup - Password mismatch rejected', false, err.message);
    failed++;
  }

  // Test 4: Login - Valid credentials
  try {
    const loginRes = await makeRequest('POST', '/api/auth/login', {
      email: 'admin@schoolerp.com',
      password: 'admin@123'
    });
    const success = loginRes.status === 200 && loginRes.body.success;
    printResult('Login - Valid credentials', success);
    if (success) {
      token = loginRes.body.data.token;
      passed++;
    } else {
      failed++;
    }
  } catch (err) {
    printResult('Login - Valid credentials', false, err.message);
    failed++;
  }

  // Test 5: Login - Invalid password
  try {
    const loginRes = await makeRequest('POST', '/api/auth/login', {
      email: 'admin@schoolerp.com',
      password: 'wrongpassword'
    });
    const success = loginRes.status === 401 && !loginRes.body.success;
    printResult('Login - Invalid password rejected', success);
    if (success) passed++; else failed++;
  } catch (err) {
    printResult('Login - Invalid password rejected', false, err.message);
    failed++;
  }

  // Test 6: Login - Non-existent email
  try {
    const loginRes = await makeRequest('POST', '/api/auth/login', {
      email: 'nonexistent@schoolerp.com',
      password: 'Test@123456'
    });
    const success = loginRes.status === 401 && !loginRes.body.success;
    printResult('Login - Non-existent user rejected', success);
    if (success) passed++; else failed++;
  } catch (err) {
    printResult('Login - Non-existent user rejected', false, err.message);
    failed++;
  }

  // Test 7: Logout - Valid token
  try {
    const logoutRes = await makeRequest('POST', '/api/auth/logout', null, {
      'Cookie': `token=${token}`
    });
    const success = logoutRes.status === 200 && logoutRes.body.success;
    printResult('Logout - Valid token', success);
    if (success) passed++; else failed++;
  } catch (err) {
    printResult('Logout - Valid token', false, err.message);
    failed++;
  }

  // Test 8: Logout - No token (should fail)
  try {
    const logoutRes = await makeRequest('POST', '/api/auth/logout', null);
    const success = logoutRes.status === 401;
    printResult('Logout - No token rejected', success);
    if (success) passed++; else failed++;
  } catch (err) {
    printResult('Logout - No token rejected', false, err.message);
    failed++;
  }

  // Print summary
  console.log(`\n📊 Test Summary: ${passed} passed, ${failed} failed\n`);
  process.exit(failed > 0 ? 1 : 0);
}

// Run tests
runTests().catch(err => {
  console.error('Test execution failed:', err);
  process.exit(1);
});

import bcrypt from "bcrypt";

// Generate bcrypt hashes for test users
// Usage: node utils/generateHash.js <password>

const password = process.argv[2] || "admin@123";

async function generateHash() {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    
    console.log(`\n✅ Password Hash Generated`);
    console.log(`Input Password: ${password}`);
    console.log(`Hashed Password: ${hash}`);
    console.log(`\nUsage in SQL:`);
    console.log(`INSERT INTO superadmins (email, password, name, role, status)`);
    console.log(`VALUES ('admin@example.com', '${hash}', 'Admin Name', 'admin', 'active');\n`);
    
  } catch (error) {
    console.error("❌ Error generating hash:", error.message);
  }
}

generateHash();

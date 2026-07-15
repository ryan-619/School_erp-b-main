import bcrypt from 'bcryptjs';

const password = process.argv[2] || 'Admin@123';
const rounds = Number(process.argv[3]) || 10;

bcrypt.hash(password, rounds).then(hash => {
  console.log(`\nPassword : ${password}`);
  console.log(`Hash     : ${hash}\n`);
});

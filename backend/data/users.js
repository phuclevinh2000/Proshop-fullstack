import bcrypt from "bcryptjs"

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('12345678', 10), //hash the password
    isAdmin: true,
  },
  {
    name: 'Tram Nguyen',
    email: 'tram@example.com',
    password: bcrypt.hashSync('12345678', 10), //hash the password
  },
  {
    name: 'Thanh Dat',
    email: 'dat@example.com',
    password: bcrypt.hashSync('12345678', 10), //hash the password
  },
];

export default users

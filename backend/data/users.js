import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Phuc Le',
    email: 'phuc@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Tram Nguyen',
    email: 'tram@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
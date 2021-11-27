import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn: '30d'  //expired in 30 day
  })
}

export default generateToken
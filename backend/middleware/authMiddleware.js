import jwt from "jsonwebtoken"
import User from "../models/userModel.js"

const protect = async (req, res, next) => {
  console.log(req.headers.authorization)

  next()
}

export {
  protect
}
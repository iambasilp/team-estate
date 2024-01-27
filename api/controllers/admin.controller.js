import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

// ? get all users
const getUsers = async (req, res, next) => {
   try {
      const users = await User.find();
      res.status(200).json(users);
   } catch (error) {
      next(error);
   }
};

export { getUsers };

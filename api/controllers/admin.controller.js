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

// ? search users by there name or email
const findUsers = async (req, res, next) => {
   const { keyword } = req.query;
   if (!keyword) return next(errorHandler(400, "keyword required"));

   try {
      // ? if the keyword matches the username or email, return the users
      const users = await User.find({
         $or: [{ username: { $regex: new RegExp(keyword, "i") } }, { email: { $regex: new RegExp(keyword, "i") } }],
      })
         .select({ _id: 1, username: 1, email: 1, role: 1, avatar: 1, createdAt: 1 })
         .sort({ createdAt: -1 });

      res.status(200).json(users);
   } catch (error) {
      next(error);
   }
};

export { getUsers, findUsers };

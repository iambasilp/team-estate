import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

// ? get all users or search for users by name or email
const getUsers = async (req, res, next) => {
   const { keyword } = req.query;
   try {
      // ? if no keyword is provided, return all users
      if (!keyword || keyword === "") {
         const users = await User.find();
         res.status(200).json(users);

         // ? if keyword is provided, search for users by name or email
      } else {
         const users = await User.find({
            $or: [{ username: { $regex: new RegExp(keyword, "i") } }, { email: { $regex: new RegExp(keyword, "i") } }],
         })
            .select({ _id: 1, username: 1, email: 1, role: 1, avatar: 1, createdAt: 1 })
            .sort({ createdAt: -1 });

         res.status(200).json(users);
      }
   } catch (error) {
      next(error);
   }
};

// ? delete user by user id
const deleteUser = async (req, res, next) => {
   const { id } = req.params;

   const user = await User.findById(id);
   if (!user) return next(errorHandler(404, "user not found"));

   try {
      // ? check if the user is deleting himself
      if (id === req.user.id) {
         next(errorHandler(400, "you can't delete yourself"));
      } else {
         await User.findByIdAndDelete(id);
         res.status(200).json("user deleted");
      }
   } catch (error) {
      next(error);
   }
};

export { getUsers, deleteUser };

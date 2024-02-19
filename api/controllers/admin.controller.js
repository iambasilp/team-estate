import User from "../models/user.model.js";
import Listing from "../models/listing.model.js";
import { errorHandler } from "../utils/error.js";

// ? get all users or search for users by name or email
const getUsers = async (req, res, next) => {
   const { keyword } = req.query;
   try {
      // ? if no keyword is provided, return all users
      if (!keyword || keyword === "") {
         const users = await User.find()
            .select({ _id: 1, username: 1, email: 1, role: 1, avatar: 1, createdAt: 1 })
            .sort({ createdAt: -1 });
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
      }

      // ? remove user and his listings
      await User.findByIdAndDelete(id);
      await Listing.deleteMany({ userRef: id });
      res.status(200).json("user deleted");
   } catch (error) {
      next(error);
   }
};

// ? promote user to admin
const promoteUser = async (req, res, next) => {
   const { id } = req.params;
   try {
      const user = await User.findById(id);
      if (!user) return next(errorHandler(404, "user not found"));

      user.role = "admin";
      await user.save();

      res.status(200).json(`user: ${user.username} promoted to admin`);
   } catch (error) {
      next(error);
   }
};

// ? get all listing or search for listings by name, description or address
const getListings = async (req, res, next) => {
   const { keyword } = req.query;

   try {
      // ?  if no keyword is provided, return all listings
      if (!keyword || keyword === "") {
         const listings = await Listing.find()
            .select({ _id: 1, name: 1, description: 1, address: 1, verified: 1, userRef: 1 })
            .sort({ createdAt: -1 });

         res.status(200).json(listings);
      } else {
         // ? if keyword is provided, search for listings by name, description or address(sorted by created time)
         const listings = await Listing.find({
            $or: [
               { name: { $regex: new RegExp(keyword, "i") } },
               { description: { $regex: new RegExp(keyword, "i") } },
               { address: { $regex: new RegExp(keyword, "i") } },
            ],
         })
            .select({ _id: 1, name: 1, description: 1, address: 1, verified: 1, userRef: 1 })
            .sort({ createdAt: -1 });
         console.log(listings);

         res.status(200).json(listings);
      }
   } catch (error) {
      next(error);
   }
};

// ? delete listing by listing id
const deleteListing = async (req, res, next) => {
   const { id } = req.params;

   const listing = Listing.findById(id);
   if (!listing) return next(errorHandler(404, "listing not found"));
   try {
      await Listing.findByIdAndDelete(id);
      res.status(200).json("listing deleted");
   } catch (error) {
      next(error);
   }
};

export { getUsers, deleteUser, promoteUser, getListings, deleteListing };

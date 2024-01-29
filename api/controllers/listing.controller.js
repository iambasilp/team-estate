import Listing from "../models/listing.model.js";
import { checkUser } from "../utils/checkUser.js";
import { errorHandler } from "../utils/error.js";

export const createListing = async (req, res, next) => {
   try {
      const listing = await Listing.create(req.body);
      return res.status(201).json(listing);
   } catch (error) {
      next(error);
   }
};

// ? approve listing by listing id
export const approveListing = async (req, res, next) => {
   const { id } = req.params;
   try {
      const listing = await Listing.findById(id);
      if (!listing) return next(errorHandler(404, "listing not found"));

      listing.verified = true;
      await listing.save();

      res.status(200).json({ message: "listing approved", listing });
   } catch (error) {
      next(error);
   }
};

export const deleteListing = async (req, res, next) => {
   const listing = await Listing.findById(req.params.id);

   if (!listing) {
      return next(errorHandler(404, "Listing not found!"));
   }

   if (req.user.id !== listing.userRef) {
      return next(errorHandler(401, "You can only delete your own listings!"));
   }

   try {
      await Listing.findByIdAndDelete(req.params.id);
      res.status(200).json("Listing has been deleted!");
   } catch (error) {
      next(error);
   }
};

export const updateListing = async (req, res, next) => {
   const listing = await Listing.findById(req.params.id);
   if (!listing) {
      return next(errorHandler(404, "Listing not found!"));
   }
   if (req.user.id !== listing.userRef) {
      return next(errorHandler(401, "You can only update your own listings!"));
   }

   try {
      const updatedListing = await Listing.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json(updatedListing);
   } catch (error) {
      next(error);
   }
};

export const getListing = async (req, res, next) => {
   const { id } = req.params;
   try {
      const listing = await Listing.findById(id);
      if (!listing) return next(errorHandler(404, "Listing not found!"));

      // ? if listing is not verified, only the owner of the listing or admin can view it
      if (listing.verified === false) {
         // ? take the user info from the token
         const user = await checkUser(req);
         console.log({ user });
         if (user?.id === listing.userRef || user?.role === "admin") {
            res.status(200).json(listing);
         } else {
            next(errorHandler(401, "You don't have permission to view this listing!"));
         }
      } else {
         res.status(200).json(listing);
      }
   } catch (error) {
      next(error);
   }
};

export const getListings = async (req, res, next) => {
   try {
      const limit = parseInt(req.query.limit) || 9;
      const startIndex = parseInt(req.query.startIndex) || 0;
      let offer = req.query.offer;

      if (offer === undefined || offer === "false") {
         offer = { $in: [false, true] };
      }

      let furnished = req.query.furnished;

      if (furnished === undefined || furnished === "false") {
         furnished = { $in: [false, true] };
      }

      let parking = req.query.parking;

      if (parking === undefined || parking === "false") {
         parking = { $in: [false, true] };
      }

      let type = req.query.type;

      if (type === undefined || type === "all") {
         type = { $in: ["sale", "rent"] };
      }

      const searchTerm = req.query.searchTerm || "";

      const sort = req.query.sort || "createdAt";

      const order = req.query.order || "desc";

      const listings = await Listing.find({
         $or: [
            { name: { $regex: new RegExp(searchTerm, "i") } },
            { description: { $regex: new RegExp(searchTerm, "i") } },
            { address: { $regex: new RegExp(searchTerm, "i") } },
         ],
         verified: true,
         offer,
         furnished,
         parking,
         type,
      })
         .sort({ [sort]: order })
         .limit(limit)
         .skip(startIndex);

      return res.status(200).json(listings);
   } catch (error) {
      next(error);
   }
};

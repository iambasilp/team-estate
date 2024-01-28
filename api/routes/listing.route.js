import express from "express";
import {
   createListing,
   deleteListing,
   updateListing,
   getListing,
   getListings,
   approveListing,
} from "../controllers/listing.controller.js";
import { verifyToken } from "../middleware/verifyUser.js";
import verifyRoles from "../middleware/verifyRoles.js";

const router = express.Router();

router.post("/create", verifyToken, createListing);
router.delete("/delete/:id", verifyToken, deleteListing);
router.post("/update/:id", verifyToken, updateListing);
router.get("/get/:id", getListing);
router.get("/get", getListings);
router.put("/approve/:id", verifyToken, verifyRoles("admin"), approveListing);

export default router;

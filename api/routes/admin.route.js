import express from "express";
import { getUsers, deleteUser, getListings, deleteListing } from "../controllers/admin.controller.js";
import { verifyToken } from "../middleware/verifyUser.js";
import verifyRoles from "../middleware/verifyRoles.js";

const router = express.Router();

router.get("/users", verifyToken, verifyRoles("admin"), getUsers);
router.delete("/users/:id", verifyToken, verifyRoles("admin"), deleteUser);
router.get("/listings", verifyToken, verifyRoles("admin"), getListings);
router.delete("/listings/:id", verifyToken, verifyRoles("admin"), deleteListing);

export default router;

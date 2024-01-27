import express from "express";
import { getUsers, deleteUser, getListings } from "../controllers/admin.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
import verifyRoles from "../middleware/verifyRoles.js";

const router = express.Router();

router.get("/users", verifyToken, verifyRoles("admin"), getUsers);
router.delete("/users/:id", verifyToken, verifyRoles("admin"), deleteUser);
router.get("/listings", verifyToken, verifyRoles("admin"), getListings);

export default router;

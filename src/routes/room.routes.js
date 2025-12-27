import { Router } from "express";
import { createRoom, deleteRoom, getAllRooms, getRoomById, toggleRoomStatus, updateRoom } from "../controllers/room.controller.js";
import { auth } from "../middlewares/auth.js";
import { authorizeRoles } from "../middlewares/role.auth.js";


const router = Router();

router.post("/", auth, authorizeRoles("admin"), createRoom);

router.patch("/:id", auth, authorizeRoles("admin"), updateRoom);

router.patch("/:id/toggle", auth, authorizeRoles("admin"), toggleRoomStatus);

router.delete("/:id", auth, authorizeRoles("admin"), deleteRoom);

// Read-only (admin/staff/student if you want)
router.get("/", auth, getAllRooms);
router.get("/:id", auth, getRoomById);



export default router;
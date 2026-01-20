import express from "express";
import { getRooms, bookRooms, resetRooms } from "../controllers/roomController.js";

const router = express.Router();

router.get("/rooms", getRooms);
router.post("/book", bookRooms);
router.post("/reset", resetRooms);

export default router;

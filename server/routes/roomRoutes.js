import express from "express";
import { getRooms, bookRooms, resetRooms, randomOccupancy } from "../controllers/roomController.js";

const router = express.Router();

router.get("/rooms", getRooms);
router.post("/book", bookRooms);
router.post("/reset", resetRooms);
router.post("/random", randomOccupancy);

export default router;

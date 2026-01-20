import express from "express";
import { getRooms, bookRooms, resetRooms } from "../controllers/roomController.js";

const router = express.Router();

router.get("/rooms", getRooms);
router.post("/book", bookRooms);
router.post("/reset", resetRooms);
router.post("/seed", async (req, res) => {
  const rooms = [];

  for (let floor = 1; floor <= 9; floor++) {
    for (let i = 1; i <= 10; i++) {
      rooms.push({
        roomNumber: floor * 100 + i,
        floor,
        position: i,
        isBooked: false,
      });
    }
  }

  for (let i = 1; i <= 7; i++) {
    rooms.push({
      roomNumber: 1000 + i,
      floor: 10,
      position: i,
      isBooked: false,
    });
  }

  await Room.deleteMany();
  await Room.insertMany(rooms);

  res.json({ message: "Rooms seeded", count: rooms.length });
});


export default router;

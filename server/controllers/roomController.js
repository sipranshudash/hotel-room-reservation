import Room from "../models/Room.js";
import { allocateRooms } from "../services/allocator.js";

// GET all rooms
export const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find().sort({
      floor: 1,
      position: 1,
    });
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// BOOK rooms
export const bookRooms = async (req, res) => {
  try {
    const { rooms } = req.body;

    if (rooms < 1 || rooms > 5) {
      return res.status(400).json({ message: "You can book 1 to 5 rooms only" });
    }

    const availableRooms = await Room.find({ isBooked: false }).sort({
      floor: 1,
      position: 1,
    });

    if (availableRooms.length < rooms) {
      return res.status(400).json({ message: "Not enough rooms available" });
    }

    const selectedRooms = allocateRooms(availableRooms, rooms);

    const ids = selectedRooms.map((room) => room._id);

    await Room.updateMany(
      { _id: { $in: ids } },
      { $set: { isBooked: true } }
    );
    

    const updatedRooms = await Room.find().sort({
      floor: 1,
      position: 1,
    });

    res.json(updatedRooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const resetRooms = async (req, res) => {
  await Room.updateMany({}, { isBooked: false });

  const rooms = await Room.find().sort({
    floor: 1,
    position: 1,
  });

  res.json(rooms);
};

export const randomOccupancy = async (req, res) => {
  const rooms = await Room.find();

  for (const room of rooms) {
    room.isBooked = Math.random() < 0.3; // 30% random booking
    await room.save();
  }

  const updatedRooms = await Room.find().sort({
    floor: 1,
    position: 1,
  });

  res.json(updatedRooms);
};


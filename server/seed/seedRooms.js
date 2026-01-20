import mongoose from "mongoose";
import dotenv from "dotenv";
import Room from "../models/Room.js";

dotenv.config();

const rooms = [];

for (let floor = 1; floor <= 9; floor++) {
  for (let i = 1; i <= 10; i++) {
    rooms.push({
      roomNumber: floor * 100 + i,
      floor: floor,
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

const seedRooms = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await Room.deleteMany();
  await Room.insertMany(rooms);
  console.log("Rooms seeded successfully");
  process.exit();
};

seedRooms();

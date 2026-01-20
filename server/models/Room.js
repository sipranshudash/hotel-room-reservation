import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  roomNumber: Number,
  floor: Number,
  position: Number, // distance from lift
  isBooked: {
    type: Boolean,
    default: false
  }
});

export default mongoose.model("Room", roomSchema);

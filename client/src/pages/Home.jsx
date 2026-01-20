import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchRooms } from "../features/rooms/roomSlice";
import Controls from "../components/Controls";
import Rooms from "../components/Rooms";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRooms()); // 🔥 REQUIRED
  }, [dispatch]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Hotel Room Reservation</h1>
      <Controls />
      <Rooms />
    </div>
  );
};

export default Home;

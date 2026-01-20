import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms } from "../features/rooms/roomSlice";
import Controls from "../components/Controls";
import Floor from "../components/Floor";

const Home = () => {
  const dispatch = useDispatch();
  const { rooms, loading } = useSelector((state) => state.rooms);

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  // group rooms by floor
  const floors = {};
  rooms.forEach((room) => {
    if (!floors[room.floor]) {
      floors[room.floor] = [];
    }
    floors[room.floor].push(room);
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Hotel Room Reservation</h2>

      <Controls />

      {loading && <p>Loading...</p>}

      {Object.keys(floors).map((floor) => (
        <Floor
          key={floor}
          floorNumber={floor}
          rooms={floors[floor]}
        />
      ))}
    </div>
  );
};

export default Home;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { bookRooms, resetRooms, fetchRooms } from "../features/rooms/roomSlice";

const Controls = () => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const handleBook = () => {
    if (count < 1 || count > 5) {
      alert("You can book 1 to 5 rooms only");
      return;
    }
    dispatch(bookRooms(count));
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="number"
        min="1"
        max="5"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />

      <button onClick={handleBook}>Book</button>
      <button onClick={() => dispatch(fetchRooms())}>Refresh</button>
      <button onClick={() => dispatch(randomRooms())}>Random</button>

      <button onClick={() => dispatch(resetRooms())}>Reset</button>
    </div>
  );
};

export default Controls;

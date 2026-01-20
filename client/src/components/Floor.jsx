import Room from "./Room";

const Floor = ({ floorNumber, rooms }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ width: "60px", fontWeight: "bold" }}>
        Floor {floorNumber}
      </div>

      <div style={{ display: "flex" }}>
        {rooms.map((room) => (
          <Room key={room.roomNumber} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Floor;

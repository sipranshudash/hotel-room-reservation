const Room = ({ room }) => {
  return (
    <div
      style={{
        width: "30px",
        height: "30px",
        margin: "4px",
        backgroundColor: room.isBooked ? "#e74c3c" : "#2ecc71",
        border: "1px solid #333",
      }}
      title={`Room ${room.roomNumber}`}
    />
  );
};

export default Room;

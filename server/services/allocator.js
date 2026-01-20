export const allocateRooms = (availableRooms, count) => {
  // Group rooms by floor
  const floorMap = {};

  availableRooms.forEach((room) => {
    if (!floorMap[room.floor]) {
      floorMap[room.floor] = [];
    }
    floorMap[room.floor].push(room);
  });

  // Try same floor booking
  for (const floor in floorMap) {
    if (floorMap[floor].length >= count) {
      return floorMap[floor]
        .sort((a, b) => a.position - b.position)
        .slice(0, count);
    }
  }

  // If not possible, calculate minimal travel distance
  let bestSelection = [];
  let minDistance = Infinity;

  for (let i = 0; i <= availableRooms.length - count; i++) {
    const selection = availableRooms.slice(i, i + count);

    const first = selection[0];
    const last = selection[selection.length - 1];

    const vertical = Math.abs(first.floor - last.floor) * 2;
    const horizontal = Math.abs(first.position - last.position);

    const distance = vertical + horizontal;

    if (distance < minDistance) {
      minDistance = distance;
      bestSelection = selection;
    }
  }

  return bestSelection;
};

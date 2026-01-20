const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchRoomsAPI = async () => {
  const res = await fetch(`${BASE_URL}/api/rooms`);
  return res.json();
};

export const bookRoomsAPI = async (count) => {
  const res = await fetch(`${BASE_URL}/api/book`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ rooms: count }),
  });
  return res.json();
};

export const resetRoomsAPI = async () => {
  const res = await fetch(`${BASE_URL}/api/reset`, {
    method: "POST",
  });
  return res.json();
};

import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const fetchRoomsAPI = async () => {
  const res = await axios.get(`${API_URL}/rooms`);
  return res.data;
};

export const bookRoomsAPI = async (count) => {
  const res = await axios.post(`${API_URL}/book`, {
    rooms: count,
  });
  return res.data;
};

export const resetRoomsAPI = async () => {
  const res = await axios.post(`${API_URL}/reset`);
  return res.data;
};
export const randomRoomsAPI = async () => {
  const res = await axios.post(`${API_URL}/random`);
  return res.data;
};

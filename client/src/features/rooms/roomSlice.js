import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRoomsAPI, bookRoomsAPI, resetRoomsAPI } from "./roomAPI";

const initialState = {
  rooms: [],
  loading: false,
  error: null,
};

// async action: fetch rooms
export const fetchRooms = createAsyncThunk(
  "rooms/fetchRooms",
  async () => {
    return await fetchRoomsAPI();
  }
);

export const randomRooms = createAsyncThunk(
  "rooms/random",
  async () => {
    return await randomRoomsAPI();
  }
);

// async action: book rooms
export const bookRooms = createAsyncThunk(
  "rooms/bookRooms",
  async (count) => {
    return await bookRoomsAPI(count);
  }
);

// async action: reset rooms
export const resetRooms = createAsyncThunk(
  "rooms/resetRooms",
  async () => {
    return await resetRoomsAPI();
  }
);

const roomSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetch rooms
      .addCase(fetchRooms.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRooms.fulfilled, (state, action) => {
        state.loading = false;
        state.rooms = action.payload;
      })
      .addCase(fetchRooms.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // book rooms
      .addCase(bookRooms.pending, (state) => {
        state.loading = true;
      })
      .addCase(bookRooms.fulfilled, (state, action) => {
        state.loading = false;
        state.rooms = action.payload;
      })

      // reset rooms
      .addCase(resetRooms.fulfilled, (state, action) => {
        state.rooms = action.payload;
      });
  },
});

export default roomSlice.reducer;

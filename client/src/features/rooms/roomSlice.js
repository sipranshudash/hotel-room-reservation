import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchRoomsAPI,
  bookRoomsAPI,
  resetRoomsAPI,
} from "./roomAPI";

const initialState = {
  rooms: [],
  loading: false,
  error: null,
};

/**
 * Fetch all rooms
 * GET /api/rooms
 */
export const fetchRooms = createAsyncThunk(
  "rooms/fetchRooms",
  async (_, { rejectWithValue }) => {
    try {
      return await fetchRoomsAPI();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/**
 * Book rooms
 * POST /api/book
 */
export const bookRooms = createAsyncThunk(
  "rooms/bookRooms",
  async (count, { rejectWithValue }) => {
    try {
      return await bookRoomsAPI(count);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/**
 * Reset all rooms
 * POST /api/reset
 */
export const resetRooms = createAsyncThunk(
  "rooms/resetRooms",
  async (_, { rejectWithValue }) => {
    try {
      return await resetRoomsAPI();
    } catch (error) {
      return rejectWithValue(error.message);
    }
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
        state.error = null;
      })
      .addCase(fetchRooms.fulfilled, (state, action) => {
        state.loading = false;
        state.rooms = action.payload;
      })
      .addCase(fetchRooms.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // book rooms
      .addCase(bookRooms.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(bookRooms.fulfilled, (state, action) => {
        state.loading = false;
        state.rooms = action.payload;
      })
      .addCase(bookRooms.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // reset rooms
      .addCase(resetRooms.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetRooms.fulfilled, (state, action) => {
        state.loading = false;
        state.rooms = action.payload;
      })
      .addCase(resetRooms.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default roomSlice.reducer;

// rocketsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    rocketsLoading(state) {
      state.status = 'loading';
    },
    rocketsReceived(state, action) {
      state.status = 'succeeded';
      state.list = action.payload;
    },
    rocketsError(state, action) {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { rocketsLoading, rocketsReceived, rocketsError } = rocketsSlice.actions;

export default rocketsSlice.reducer;

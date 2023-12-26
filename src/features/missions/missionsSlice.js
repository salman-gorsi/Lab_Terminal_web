
import { createSlice } from '@reduxjs/toolkit';
import { fetchMissions } from './missionsAPI';

const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    missionsLoading(state) {
      state.status = 'loading';
    },
    missionsReceived(state, action) {
      state.status = 'succeeded';
      state.list = action.payload;
    },
    missionsError(state, action) {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { missionsLoading, missionsReceived, missionsError } = missionsSlice.actions;

export const fetchMissionsAsync = () => async (dispatch) => {
  dispatch(missionsLoading());
  try

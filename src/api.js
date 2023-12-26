// api.js
import { fetchRockets } from './features/rockets/rocketsAPI';
import { fetchMissions } from './features/missions/missionsAPI';
import { useDispatch } from 'react-redux';
import {
  rocketsLoading,
  rocketsReceived,
  rocketsError,
  fetchRocketsAsync,
} from './features/rockets/rocketsSlice';
import {
  missionsLoading,
  missionsReceived,
  missionsError,
  fetchMissionsAsync,
} from './features/missions/missionsSlice';

export const fetchData = () => {
  const dispatch = useDispatch();

  // Fetch rockets data
  dispatch(rocketsLoading());
  fetchRockets()
    .then((rocketsData) => {
      dispatch(rocketsReceived(rocketsData));
    })
    .catch((error) => {
      dispatch(rocketsError(error.message));
    });

  // Fetch missions data
  dispatch(missionsLoading());
  fetchMissions()
    .then((missionsData) => {
      dispatch(missionsReceived(missionsData));
    })
    .catch((error) => {
      dispatch(missionsError(error.message));
    });
};

export const fetchDataOnFirstRender = () => {
  useDispatch(fetchRocketsAsync());
  useDispatch(fetchMissionsAsync());
};

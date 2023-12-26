// missionsAPI.js
import axios from 'axios';

export const fetchMissions = async () => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    return response.data;
  } catch (error) {
    console.error('Error fetching missions:', error);
    throw error;
  }
};

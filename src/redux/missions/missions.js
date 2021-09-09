import SpaceX from "../../utils/api";

const UPDATE_MISSIONS = 'space-travelers-hub-react/missions/UPDATE_MISSIONS';

const initialState = [];

export const updateMission = (payload) => ({
  type: UPDATE_MISSIONS,
  payload,
});

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MISSIONS:
      return action.payload;
    default:
      return state;
  }
};

export default missionReducer;

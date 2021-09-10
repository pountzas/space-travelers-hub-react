import spaceX from '../../utils/api';

const UPDATE_MISSIONS = 'space-travelers-hub-react/missions/UPDATE_MISSIONS';
const JOIN_MISSION = 'space-travelers-hub-react/missions/JOIN_MISSION';
// const LEAVE_MISSION = "space-travelers-hub-react/missions/LEAVE_MISSION"

const initialState = [];

export const updateMission = (payload) => ({
  type: UPDATE_MISSIONS,
  payload,
});

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MISSIONS:
      return action.payload;
    case JOIN_MISSION: {
      const newMission = state.map((mission) => {
        if (mission.missionId !== action.payload) {
          return mission;
        }
        return { ...mission, reserved: !mission.reserved };
      });
      return newMission;
    }

    default:
      return state;
  }
};

export const getMissions = () => (dispatch) => {
  spaceX.getAllMissions().then((response) => {
    dispatch(updateMission(
      response.map((mission) => ({
        missonId: mission.mission_id,
        missionName: mission.mission_name,
        missionDescription: mission.description,
      })),

    ));
  });
};

export default missionReducer;

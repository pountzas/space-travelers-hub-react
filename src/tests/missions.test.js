import missionsReducer, { toggleMission } from '../redux/missions/missions';

describe('test initial state', () => {
  test('should return the initial state of missions reducer', () => {
    expect(missionsReducer(undefined, {})).toEqual({
      missions: [],
    });
  });
});

describe('test toggle reserved action', () => {
  test('should return the mission with reverted reserved value', () => {
    const exampleInitialState = {
      missions: [
        {
          mission_id: '9D1B7E0',
          reserved: true,
        },
      ],
    };
    expect(missionsReducer(exampleInitialState, toggleMission('9D1B7E0'))).toEqual(
      {
        missions: [
          {
            mission_id: '9D1B7E0',
            reserved: false,
          },
        ],
      },
    );
  });
});

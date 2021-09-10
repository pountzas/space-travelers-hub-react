import missionsReducer, { toggleMission } from '../redux/missions/missions';

describe('test initial state', () => {
  test('should return the initial state of missions reducer', () => {
    expect(missionsReducer(undefined, {})).toEqual({
      missions: [],
    });
  });
});

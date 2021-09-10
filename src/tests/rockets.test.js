import rocketsReducer, { toggleReserveRocket } from '../redux/rockets/rockets';

describe('test initial state', () => {
  test('should return the initial state of rockets reducer', () => {
    expect(rocketsReducer(undefined, {})).toEqual({
      rockets: [],
    });
  });
});

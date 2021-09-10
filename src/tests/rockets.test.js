import rocketsReducer, { toggleReserveRocket } from '../redux/rockets/rockets';

describe('test initial state', () => {
  test('should return the initial state of rockets reducer', () => {
    expect(rocketsReducer(undefined, {})).toEqual({
      rockets: [],
    });
  });
});

describe('test toggle reserved action', () => {
  test('should return the rockets with reverted reserved value', () => {
    const initialRocketState = {
      rockets: [
        {
          id: 1,
          reserved: true,
        },
      ],
    };
    expect(rocketsReducer(initialRocketState, toggleReserveRocket(1))).toEqual(
      {
        rockets: [
          {
            id: 1,
            reserved: false,
          },
        ],
      },
    );
  });
});

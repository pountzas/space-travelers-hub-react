import { GET_ROCKETS, GET_ROCKETS_SUCCESS, GET_ROCKETS_ERR } from '../slices/rocketsSlice';

// Actions

const TOGGLE_RESERVE_ROCKET = 'rockets/rockets/TOGGLE_RESERVE_ROCKET';

// Initial state

const initialState = {
  rockets: [],
};

// Action Creators

export const toggleReserveRocket = (payload) => ({
  type: TOGGLE_RESERVE_ROCKET,
  payload,
});

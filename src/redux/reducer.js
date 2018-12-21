import { INCREASE_COUNT, DECREASE_COUNT, SAVE_BW } from "./actionTypes";

const initialState = {
  timer: 0,
  count: 0,
  userBW: 0
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNT:
      return { ...state, count: state.count + 1 };
    case DECREASE_COUNT:
      return { ...state, count: state.count - 1 };
    case DECREASE_COUNT:
      return { ...state, count: state.count - 1 };
    case SAVE_BW:
      return { ...state, userBW: action.payload };
    default:
      return state;
  }
};

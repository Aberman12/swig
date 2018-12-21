import { INCREASE_COUNT, DECREASE_COUNT, SAVE_BW } from "./actionTypes";

export const increaseCount = () => {
  return { type: INCREASE_COUNT };
};

export const decreaseCount = () => {
  return { type: DECREASE_COUNT };
};

export const saveBW = number => {
  return {
    type: SAVE_BW,
    payload: number
  };
};

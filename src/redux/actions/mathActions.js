import { ActionTypes } from "../constants/action-types";

export const setplus = (number) => {
  return {
    type: ActionTypes.PLUS,
    payload: number,
  };
};

export const setminus = (number) => {
  return {
    type: ActionTypes.MINUS,
    payload: number,
  };
};

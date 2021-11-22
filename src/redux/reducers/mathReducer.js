import { ActionTypes } from "../constants/action-types";

const initialState = {
  number: 0,
  name:"hau",
};

export const math = (state = initialState,action) => {
  switch (action.type) {
    case ActionTypes.PLUS:
      console.log(action)
      return {
        ...state, number: action.payload
      };
    case ActionTypes.MINUS:
      console.log(action)
      console.log(action.payload)
      return {
      ...state, number: action.payload
      };
    default:
      return state;
  }
};

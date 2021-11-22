import { ActionTypes } from "../constants/action-types";

const initialState = {
  age: 0,
  name:"hau",
};

export const math2 = (state = initialState,action) => {
  switch (action.type) {
    case ActionTypes.PLUS:
      console.log(action)
      return {
        ...state, age: action.payload
      };
    case ActionTypes.MINUS:
      console.log(action)
      console.log(action.payload)
      return {
      ...state, age: action.payload
      };
    default:
      return state;
  }
};

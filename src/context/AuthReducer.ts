import { types } from "../auth/types/types";
import { Action } from "../types/typeHeroe";

export const authReducer = (state = {}, action:Action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        user: action.payload,
      };
    case types.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
};

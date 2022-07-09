import { constants as c } from "../../constants";

const initialState = {
  token: null,
  user: null,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case c.GET_USER_TOKEN:
      return {
        ...state,
        token: action.data,
      };
    case c.SET_USER_INFO:
      return {
        ...state,
        user: action.payload,
      };
    case c.REFRESH_USER_TOKEN:
      return {
        ...state,
        token: action.data
      }
    default:
      return state;
  }
}

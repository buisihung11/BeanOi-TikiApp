import { constants as c } from "../../constants";
const initialState = {
  status: c.LOADING,
  createdParty: "",
  joinedParty: "",
  isProcessingJoinParty: false,
  isProcessingCreateParty: false,
};

export default function party(state = initialState, action) {
  switch (action.type) {
    case c.PROCESSING_CREATE_PARTY:
      return {
        ...state,
        isProcessingCreateParty: action.payload,
      };
    case c.PROCESSING_JOIN_PARTY:
      return {
        ...state,
        isProcessingJoinParty: action.payload,
      };
    default:
      return state;
  }
}

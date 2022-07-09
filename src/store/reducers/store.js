import { constants as c } from "../../constants";
import { clone } from "../../helper";

const inititalState = {
  status: c.LOADING,
  defaultStore: null,
  stores: [],
  selectedTimeSlot: null,
  suppliers: [],
  selectedLocation: null,
  locations: [],
  info: {
    data: {},
    status: c.LOADING,
  },
  list: {
    data: [],
    status: c.LOADING,
  },
};

export default function store(state = inititalState, action) {
  switch (action.type) {
    case c.GET_ALL_STORE:
      return {
        ...state,
        stores: action.payload,
        status: c.SUCCESS,
        defaultStore: action.payload[0],
        selectedTimeSlot: action.selectedTimeSlot,
      };
    case "GET_ALL_SUPPLIER":
      return {
        ...state,
        suppliers: action.payload,
      };

    case "GET_ALL_LOCATION":
      return {
        ...state,
        locations: action.payload,
        selectedLocation: action.location,
      };
    case "SET_TIME_SLOT":
      return {
        ...state,
        selectedTimeSlot: action.selectedTimeSlot,
      };
    case "SET_LOCATION":
      return {
        ...state,
        selectedLocation: action.location,
      };
    case c.GET_STORE_INFO:
      return handleGetStoreInfo(state, action);
    case c.CHANGE_DEFAULT_STORE:
      return handleChangeDefaultStore(state, action.id);
    case c.TOGGLE_FAVORITE_STORE:
      return handleToggleFavoriteStore(state, action);
    default:
      return state;
  }
}

function handleChangeDefaultStore(curState, id) {
  const selected = curState.list.data.filter((v) => v._id === id)[0];
  if (!selected) return curState;
  return { ...curState, defaultStore: selected };
}

function handleToggleFavoriteStore(curState, { id, favorite }) {
  let newState = clone(curState);
  newState.info.data.favorite = favorite;
  const index = newState.list.data.findIndex((v) => v._id === id);
  if (index !== -1) {
    newState.list.data[index].favorite = favorite;
    const updatedItem = newState.list.data.splice(index, 1);
    newState.list.data.unshift(...updatedItem);
  }
  return newState;
}

function handleGetStoreInfo(curState, { id }) {
  const selectedStore = curState.list.data.find((v) => v._id === id);
  curState.info = {
    status: c.SUCCESS,
    data: selectedStore,
  };
  return curState;
}

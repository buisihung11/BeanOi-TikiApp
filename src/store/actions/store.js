import { constants as c } from "../../constants";
import { getData } from "../../services";
import apiStores from "../../services/stores";
import apiSuppliers from "../../services/supplier";

export const getAllStore = () => async (dispatch) => {
  const stores = await apiStores.getStores();
  console.log(stores);
  console.log("timeslot", stores.time_slots[0].from, stores.time_slots[0].to);
  dispatch({
    type: c.GET_ALL_STORE,
    payload: stores,
    // TODO: Set default time slot
    selectedTimeSlot: [stores.time_slots[0].from, stores.time_slots[0].to],
  });

  dispatch(getSuppliersAction());
};

export const getAllLocations = () => async (dispatch) => {
  const list = await apiStores.getLocations();
  console.log("locations", list[0].locations);
  dispatch({
    type: "GET_ALL_LOCATION",
    payload: list[0].locations,
    location: list[0].locations[0],
  });
  dispatch(getSuppliersAction());
};

// TODO: setTimeSlotAction
export const setTimeSlotAction = (currentTimeSlot) => async (dispatch) => {
  dispatch({
    type: "SET_TIME_SLOT",
    selectedTimeSlot: currentTimeSlot,
  });
  dispatch(getSuppliersAction());
};

export const setLocationAction = (idx) => async (dispatch) => {
  const list = await apiStores.getLocations();
  console.log("currentLocation", list[0].locations[idx]);
  dispatch({
    type: "SET_LOCATION",
    location: list[0].locations[idx],
  });
  dispatch(getSuppliersAction());
};

export const getSuppliersAction = () => async (dispatch, getState) => {
  const {
    store: { selectedTimeSlot },
  } = getState();
  console.log("TimeSLOT", selectedTimeSlot);
  const suppliers = await apiSuppliers.getSuppliers(selectedTimeSlot);
  console.log("supplierrr", suppliers);
  dispatch({
    type: "GET_ALL_SUPPLIER",
    payload: suppliers,
  });
};

export const changeDefaultStore = (id) => (dispatch) => {
  dispatch({
    type: c.CHANGE_DEFAULT_STORE,
    id,
  });
};

export const getStoreById = (id) => async (dispatch) => {
  dispatch({
    type: c.GET_STORE_INFO,
    id,
  });
};

export const addFavoriteStore = (id) => (dispatch) => {
  dispatch({
    type: c.ADD_FAVORITE_STORE,
    id,
  });
};

export const removeFavoriteStore = (id) => (dispatch) => {
  dispatch({
    type: c.REMOVE_FAVORITE_STORE,
    id,
  });
};

export const toggleFavoriteStore = (id, favorite) => (dispatch) => {
  dispatch({
    type: c.TOGGLE_FAVORITE_STORE,
    id,
    favorite,
  });
};

export const constants = {
  STORE_PICKUP: "STORE_PICKUP",
  DELIVERY: "DELIVERY",
  // PROUCT ACTION TYPE
  GET_PRODUCT_DETAIL: "GET_PRODUCT_DETAIL",
  GET_ALL_PRODUCTS: "GET_ALL_PRODUCTS",
  TOGGLE_FAVORITE_PRODUCT: "TOGGLE_FAVORITE_PRODUCT",
  // CATEGORY ACTION TYPE
  GET_CATEGORIES_SUCCESS: "GET_CATEGORIES_SUCCESS",
  // CART ACTION TYPE
  CHANGE_ITEM_NUMBER_IN_CART: "CHANGE_ITEM_NUMBER_IN_CART",
  CHANGE_TIME_PICKUP: "CHANGE_TIME_PICKUP",
  APPLY_COUPON: "APPLY_COUPON",
  RESET_COUPON: "RESET_COUPON",
  RESET_CART: "RESET_CART",
  ADD_CART: "ADD_CART",
  PREPARE_CART: "PREPARE_CART",
  CHECKOUT_CART : "CHECKOUT_CART",
  // BUYER ACTION TYPE
  CHANGE_DEFAULT_ADDRESS: "CHANGE_DEFAULT_ADDRESS",
  GET_BUYER_INFO: "GET_BUYER_INFO",
  UPDATE_ADDRESS: "UPDATE_ADDRESS",
  DELETE_ADDRESS: "DeLETE_ADDRESS",
  REMOVE_ADDRESS: "REMOVE_ADDRESS",
  ADD_ADDRESS: "ADD_ADDRESS",
  // ORDER ACTION TYPE
  GET_ORDER_INFO: "GET_ORDER_INFO",
  GET_ALL_ORDERS: "GET_ALL_ORDERS",
  ORDER: "ORDER",
  // STORE ACTION TYPE
  TOGGLE_FAVORITE_STORE: "TOGGLE_FAVORITE_STORE",
  REMOVE_FAVORITE_STORE: "REMOVE_FAVORITE_STORE",
  CHANGE_DEFAULT_STORE: "CHANGE_DEFAULT_STORE",
  ADD_FAVORITE_STORE: "ADD_FAVORITE_STORE",
  GET_STORE_INFO: "GET_STORE_INFO",
  GET_ALL_STORE: "GET_ALL_STORE",
  // AUTH
  REFRESH_USER_TOKEN: "REFRESH_USER_TOKEN",
  GET_USER_TOKEN: "GET_USER_TOKEN",
  SET_USER_INFO: "SET_USER_INFO",
  // STATUS
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE",
  LOADING: "LOADING",
  NONE: "NONE",
  // ORDER STATUS
  DELIVERING: "DELIVERING",
  PREPARING: "PREPARING",
  COMPLETED: "COMPLETED",
  DELIVERED: "DELIVERED",
  RECEIVED: "RECEIVED",
  READY: "READY",
  FAIL: "FAIL",
  // RESERVATION
  RESERVED: "reserved",
  PAST: "past",
  CANCELED: "canceled",
  GET_ALL_RESERVATIONS: "GET_ALL_RESERVATIONS",
  GET_RESERVATION_DETAIL: "GET_RESERVATION_DETAIL",
  CANCEL_BOOKING: "CANCEL_BOOKING",
  BOOKING_TABLE: "BOOKING_TABLE",
  SELECT_TABLE: "SELECT_TABLE",
  // GIFT ACTION
  GET_GIFTS: "GET_GIFTS",
  SELECT_GIFT: "SELECT_GIFT",
  REMOVE_GIFT: "REMOVE_GIFT",
  PROCESSING_SEND_GIFT: "PROCESSING_SEND_GIFT",
  RESET_GIFT: "RESET_GIFT",
};

export const PRODUCT_TYPES = {
  GIFT: 12,
  SINGLE_PRODUCT: 0,
  EXTRA_PRODUCT: 5,
  MASTER_PRODUCT: 6,
  DETAIL_PRODUCT: 7,
  COMPLEX_PRODUCT: 10,
};

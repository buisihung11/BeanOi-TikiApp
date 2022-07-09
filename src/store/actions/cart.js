import { constants as c } from "../../constants";
import { getDataInstant } from "../../services";
import cartApi from "../../services/cart/index";
import apiParty from "../../services/party/index";
import { navigateTo } from "../../helper";

export const addCart = (data) => (dispatch) => {
  dispatch({
    type: c.ADD_CART,
    data,
  });
  dispatch(prepareCart());
};

export const changeItemNumber = (_id, value) => (dispatch) => {
  dispatch({
    type: c.CHANGE_ITEM_NUMBER_IN_CART,
    _id,
    value,
  });
  dispatch(prepareCart());
};

export const applyCoupon = (orderMethod, code) => (dispatch) => {
  const coupons = getDataInstant("coupons");
  let value = 0;
  let status = c.FAILURE;
  const selectedCoupon = coupons.filter(
    (v) => v.code.toLowerCase() === code.trim().toLowerCase()
  )[0];
  if (selectedCoupon) {
    value = selectedCoupon.value;
    status = c.SUCCESS;
  }
  dispatch({
    type: c.APPLY_COUPON,
    orderMethod,
    status,
    value,
    code,
  });
};

export const resetCoupon = (orderMethod) => (dispatch) => {
  dispatch({
    type: c.RESET_COUPON,
    orderMethod,
    status: c.NONE,
    value: 0,
  });
};

export const changePickupTime = (time, date) => (dispatch) => {
  dispatch({
    type: c.CHANGE_TIME_PICKUP,
    date,
    time,
  });
};

export const resetCart = () => (dispatch) => {
  dispatch({
    type: c.RESET_CART,
  });
};

export const prepareCart = () => async (dispatch, getState) => {
  const state = getState();
  const products = state.cart.products;
  const req = buildPrepareCart({ products });
  // console.log(req);
  const res = await cartApi.prepareOrder(req);
  dispatch({
    type: c.PREPARE_CART,
    data: res,
  });
};

export const checkoutCart = () => async (dispatch, getState) => {
  const state = getState();
  const products = state.cart.products;
  const req = buildCheckoutCart({ products });
  // console.log(req);
  const res = await cartApi.checkOut(req);
  const orderId = res.order_id;
  dispatch({
    type: c.CHECKOUT_CART,
    data: res,
  });
  navigateTo("order-detail", { orderId });
  dispatch(resetCart());
};

const buildPrepareCart = (orderState) => {
  return {
    destination_location_id: 23,
    payment: 1,
    vouchers: [],
    customer_info: {
      name: "",
      phone: "",
      email: "",
    },
    products_list: orderState.products.map((cartItem) => ({
      master_product: cartItem.product.product_in_menu_id,
      quantity: cartItem.number,
    })),
  };
};

const buildCheckoutCart = (orderState, customer) => {
  return {
    destination_location_id: 23,
    payment: 1,
    vouchers: [],
    customer_info: {
      name: "Duong Tan Minh",
      phone: "0764420250",
      email: "tnmnh1105@gmail.com",
    },
    products_list: orderState.products.map((cartItem) => ({
      master_product: cartItem.product.product_in_menu_id,
      quantity: cartItem.number,
    })),
  };
};

export const createParty = () => async (dispatch) => {
  try {
    const res = await apiParty.createParty();
    if (res.error && res.error.code >= 400) {
      my.showToast({
        type: "fail",
        content: res.error.message ? res.error.message : "Có lỗi xảy ra",
      });
    } else {
      my.showToast({
        type: "success",
        content: "Tạo party thành công",
      });
      console.log("cart res", res.data);
      dispatch({
        type: c.PROCESSING_CREATE_PARTY,
        payload: true,
        data: res.data,
      });
    }
  } catch (error) {
    my.showToast({
      type: "fail",
      content: "Có lỗi xảy ra",
    });
    console.log(error);
  } finally {
    dispatch({
      type: c.PROCESSING_CREATE_PARTY,
      payload: false,
    });
  }
};

export const joinParty = () => async (dispatch) => {
  // TODO: Send gift
  try {
    const res = await apiParty.joinParty();
    if (res.error && res.error.code >= 400) {
      my.showToast({
        type: "fail",
        content: res.error.message ? res.error.message : "Có lỗi xảy ra",
      });
    } else {
      my.showToast({
        type: "success",
        content: "Tham gia party thành công",
      });
      dispatch({
        type: c.PROCESSING_JOIN_PARTY,
        payload: true,
        data : res.data
      });
    }
  } catch (error) {
    my.showToast({
      type: "fail",
      content: "Có lỗi xảy ra",
    });
    console.log(error);
  } finally {
    dispatch({
      type: c.PROCESSING_JOIN_PARTY,
      payload: false,
    });
  }
};

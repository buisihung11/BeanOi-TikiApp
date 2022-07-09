import { constants as c } from "../../constants";
import { getDataInstant } from "../../services";
import cartApi from "../../services/cart/index";

export const addCart = (data) => (dispatch) => {
  dispatch({
    type: c.ADD_CART,
    data,
  });
  dispatch(prepareCart());
};

export const changeItemNumber = ( _id, value) => (dispatch) => {
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

export const resetCart = (orderMethod) => (dispatch) => {
  dispatch({
    type: c.RESET_CART,
    orderMethod,
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

const buildPrepareCart = (orderState) => {
  return {
    destination_location_id: 23,
    payment: 1,
    vouchers: [],
    customer_info:{
      name:"",
      phone:"",
      email:"",
    },
    products_list: orderState.products.map((cartItem) => ({
      master_product: cartItem.product.product_in_menu_id,
      quantity: cartItem.number,
    })),
  };
};

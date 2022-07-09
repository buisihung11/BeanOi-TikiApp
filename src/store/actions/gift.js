import { getAuth, refreshToken } from "../../helper/auth";
import { constants as c } from "../../constants";
import apiGifts from "../../services/gift";

export const getGiftInMenu = () => async (dispatch) => {
  const res = await apiGifts.getGiftInMenu();
  console.log("res", res);
  dispatch({
    type: c.GET_GIFTS,
    payload: res,
    status: c.SUCCESS,
  });
};

export const selectGift = (gift) => async (dispatch) => {
  dispatch({
    type: c.SELECT_GIFT,
    payload: gift,
  });
};

export const removeGift = (giftId) => async (dispatch) => {
  dispatch({
    type: c.REMOVE_GIFT,
    payload: giftId,
  });
};

export const sendGift = (receiverInfo) => async (dispatch, getState) => {
  // TODO: Send gift
  try {
    const state = getState();
    const orderInfo = {
      selectedGifts: state.gift.selectedGifts,
      customer_info: receiverInfo,
      destination_location_id: 23,
      payment: 1,
    };
    console.log("orderInfo", orderInfo);
    dispatch({
      type: c.PROCESSING_SEND_GIFT,
      payload: true,
    });
    const res = await apiGifts.sendGift(buildOrderRequest(orderInfo));
    if (res.error && res.error.code >= 400) {
      my.showToast({
        type: "fail",
        content: res.error.message ? res.error.message : "Có lỗi xảy ra",
      });
    } else {
      await dispatch(resetGift());

      // my.setTabBarBadge({
      //   index: 1,
      //   text: 3,
      // });

      my.showToast({
        type: "success",
        content: "Tặng quà thành công",
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
      type: c.PROCESSING_SEND_GIFT,
      payload: false,
    });
  }
};

export const resetGift = () => async (dispatch) => {
  dispatch({
    type: c.RESET_GIFT,
  });
};

export const refreshUserToken = () => async (dispatch) => {
  const data = await refreshToken();
  const status = data ? c.SUCCESS : c.FAILURE;
  dispatch({
    type: c.REFRESH_USER_TOKEN,
    data,
    status,
  });
};

const buildOrderRequest = (orderInfo) => {
  const orderReq = { ...orderInfo };
  orderReq.products_list = orderInfo.selectedGifts.map((g) => ({
    master_product: g.product_in_menu_id,
    quantity: g.quantity,
  }));
  return orderReq;
};

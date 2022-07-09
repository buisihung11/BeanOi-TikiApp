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

export const refreshUserToken = () => async (dispatch) => {
  const data = await refreshToken();
  const status = data ? c.SUCCESS : c.FAILURE;
  dispatch({
    type: c.REFRESH_USER_TOKEN,
    data,
    status,
  });
};

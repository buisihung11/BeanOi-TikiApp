import { getAuth, refreshToken } from "../../helper/auth";
import { constants as c } from "../../constants";

export const getUserToken = () => async (dispatch) => {
  const data = await getAuth();
  const status = data ? c.SUCCESS : c.FAILURE;
  dispatch({
    type: c.GET_USER_TOKEN,
    data,
    status,
  });
};

export const setUserInfo = (userInfo) => async (dispatch) => {
  dispatch({
    type: c.SET_USER_INFO,
    payload: userInfo,
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

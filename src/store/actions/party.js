import { constants as c } from "../../constants";
import apiParty from "../../services/party/index";

export const createParty = () => async (dispatch) => {
  // TODO: Send gift
  try {
    dispatch({
      type: c.PROCESSING_CREATE_PARTY,
      payload: true,
    });
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
    dispatch({
      type: c.PROCESSING_JOIN_PARTY,
      payload: true,
    });
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

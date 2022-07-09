import myx from "../../helper/myx";
import { BASE_URL, VIRTUAL_STORE_TYPE } from "../../utils/config";
import queryString from "query-string";

const prepareOrder = async (cart) => {
  const res = await myx.request({
    url: `${BASE_URL}/orders/prepare`,
    headers: {
      "Content-type": "application/json",
    },
    data: cart,
    method: "POST",
  });
  // console.log("prepare cart", res);
  return res.data;
};

const checkOut = async (cart) => {
  const res = await myx.request({
    url: `${BASE_URL}/orders`,
    headers: {
      "Content-type": "application/json",
    },
    data: cart,
    method: "POST",
  });
  console.log("checkout", res);
  return res.data;
};

const apiCart = {
  prepareOrder,
  checkOut,
};

export default apiCart;

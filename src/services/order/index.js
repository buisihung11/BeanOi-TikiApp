import myx from "../../helper/myx";
import { BASE_URL, VIRTUAL_STORE_TYPE } from "../../utils/config";

export const getOrderById = async (orderId) => {

  const res = await myx.request({
    url: `${BASE_URL}/me/order/${orderId}`,
    headers: {
      "Content-type": "application/json",
      "Authorization": "iEC6CzHrbkSDE6d8SS41WuBVk4i_OdB1oFCzoGn-3-U.bQwKY7tOdLVplCZ4Qq4v7kOpSuX0h2Ob2eoz_mTCSIo"
    },
    method: "GET",
  });
  return res.data;
};


const apiOrders = {
  getOrderById,
};

export default apiOrders;
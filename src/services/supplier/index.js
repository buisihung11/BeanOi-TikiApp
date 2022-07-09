import myx from "../../helper/myx";
import { BASE_URL, VIRTUAL_STORE_TYPE } from "../../utils/config";
import queryString from "query-string";

export const getSuppliers = async (currentTimeslot) => {
  const stringified = queryString.stringify({
    timeslot: currentTimeslot,
  });

  const res = await myx.request({
    url: `${BASE_URL}/stores/${150}/suppliers?${stringified}`,
    headers: {
      "Content-type": "application/json",
    },
    method: "GET",
  });
  console.log("res", res);
  return res.data;
};

const apiSuppliers = {
  getSuppliers,
};

export default apiSuppliers;

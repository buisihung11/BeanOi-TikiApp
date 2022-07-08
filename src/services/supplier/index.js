import myx from "../../helper/myx";
import { BASE_URL, VIRTUAL_STORE_TYPE } from "../../utils/config";
import queryString from "query-string";

export const getSupplier = async () => {
  const stringified = queryString.stringify({
    type: VIRTUAL_STORE_TYPE,
    "main-store": false,
    "has-menu": true,
    id: 150,
  });

  const res = await myx.request({
    url: `${BASE_URL}/stores?${stringified}`,
    headers: {
      "Content-type": "application/json",
    },
    method: "GET",
  });
  console.log("res", res);
  return res.data[0];
};

const apiSuppliers = {
  getStores,
};

export default apiSuppliers;

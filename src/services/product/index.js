import myx from "../../helper/myx";
import { BASE_URL, VIRTUAL_STORE_TYPE } from "../../utils/config";
import queryString from "query-string";

export const getProductsBySupplierId = async (supplierId, currentTimeslot) => {
  const stringified = queryString.stringify({
    timeslot: currentTimeslot,
  });

  const res = await myx.request({
    url: `${BASE_URL}/stores/${150}/suppliers/${supplierId}/products?${stringified}`,
    headers: {
      "Content-type": "application/json",
    },
    method: "GET",
  });
  console.log("response Product By SupplierId", res);
  return res.data;
};

export const getProductDetails = async (id, currentTimeslot) => {
  const stringified = queryString.stringify({
    timeslot: currentTimeslot,
    "store-id": 150,
    "fields": ['ChildProducts', 'CollectionId', 'Extras']
  });

  const res = await myx.request({
    url: `${BASE_URL}/products/${id}?${stringified}`,
    headers: {
      "Content-type": "application/json",
    },
    method: "GET",
  });
  console.log("response ProductDetail", res);
  return res;
};

const apiProducts = {
  getProductsBySupplierId,
};

export default apiProducts;
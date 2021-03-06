import myx from "../../helper/myx";
import { BASE_URL, VIRTUAL_STORE_TYPE } from "../../utils/config";
import queryString from "query-string";

export const getCategories = async () => {
  const stringified = queryString.stringify({
    timeslot: ["00:00:00", "23:30:00"],
  });

  const res = await myx.request({
    url: `${BASE_URL}/categories`,
    headers: {
      "Content-type": "application/json",
    },
    method: "GET",
  });
  console.log("response categories", res);
  return res.data;
};

const apiCategories = {
  getCategories,
};

export default apiCategories;
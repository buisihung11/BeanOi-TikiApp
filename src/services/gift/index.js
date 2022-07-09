import myx from "../../helper/myx";
import { BASE_URL, VIRTUAL_STORE_TYPE } from "../../utils/config";
import queryString from "query-string";

export const getGiftInMenu = async (
  storeId,
  timeslot = ["00:00:00", "23:30:00"]
) => {
  const stringified = queryString.stringify({
    timeslot: timeslot,
  });
  const res = await myx.request({
    url: `${BASE_URL}/stores/${150}/gifts?${stringified}`,
    headers: {
      "Content-type": "application/json",
    },
    method: "GET",
  });
  return res.data;
};

const apiGifts = {
  getGiftInMenu,
};

export default apiGifts;

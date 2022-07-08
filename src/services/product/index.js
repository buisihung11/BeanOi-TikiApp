import { myx } from "../../helper/myx";
import { BASE_URL } from "../../utils/config";

export const getProducts =  async (params) => {
  const res = await myx.request({baseURL: `${BASE_URL}/products`})
  return res.data;
}

const apiProduct = {
  getProducts
}

export default apiProduct;

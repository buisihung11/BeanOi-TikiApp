import { getData } from "../../services";
import { constants as c } from "../../constants";
import { apiCategory } from "../../services/category";
export const getAllCategories = () => async (dispatch) => {
  const data = await apiCategory.getAllCategories;
  dispatch({ type: c.GET_CATEGORIES_SUCCESS, data });
};

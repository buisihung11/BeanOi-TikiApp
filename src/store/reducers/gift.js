import { constants as c } from "../../constants";
import { delay, clone } from '../../helper';

const initialState = {
  status: c.LOADING,
  gifts: [],
  selectedGifts: [],
};

export default function gift(state = initialState, action) {
  switch (action.type) {
    case c.GET_GIFTS:
      return {
        ...state,
        gifts: action.payload,
        status: action.status,
      };
    case c.SELECT_GIFT:
      return handleSelectGift(state, action.payload);
    default:
      return state;
  }
}

const handleSelectGift = (curState, gift) => {
  let state = clone(curState);
  const existedGiftIndex = state.gifts.findIndex(
    (g) => g.product_id === gift.product_id
  );
  let selectedGift = gift;
  if (existedGiftIndex >= 0) {
    selectedGift = state.gifts[existedGiftIndex];
    selectedGift.quantity += 1;
    state.gifts[existedGiftIndex] = selectedGift;
  } else {
    selectedGift.quantity = 1;
    state.gifts.push(selectedGift);
  }
  return state;
};

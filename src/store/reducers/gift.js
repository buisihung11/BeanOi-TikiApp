import { constants as c } from "../../constants";
import { delay, clone } from "../../helper";

const initialState = {
  status: c.LOADING,
  gifts: [],
  selectedGifts: [],
  isProcessingSendGift: false,
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
    case c.REMOVE_GIFT:
      return handleRemoveGift(state, action.payload);
    case c.PROCESSING_SEND_GIFT:
      return {
        ...state,
        isProcessingSendGift: action.payload,
      };
    case c.RESET_GIFT:
      return {
        ...state,
        isProcessingSendGift: false,
        selectedGifts: [],
      };
    default:
      return state;
  }
}

const handleRemoveGift = (curState, giftId) => {
  let state = clone(curState);
  const existedGiftIndex = state.selectedGifts.findIndex(
    (g) => g.product_id === giftId
  );
  if (existedGiftIndex >= 0) {
    state.selectedGifts.splice(existedGiftIndex, 1);
  }
  console.log("remove", state);
  return state;
};

const handleSelectGift = (curState, gift) => {
  let state = clone(curState);
  const existedGiftIndex = state.selectedGifts.findIndex(
    (g) => g.product_id === gift.product_id
  );
  let selectedGift = gift;
  if (existedGiftIndex >= 0) {
    selectedGift = state.gifts[existedGiftIndex];
    selectedGift.quantity += 1;
    state.selectedGifts[existedGiftIndex] = selectedGift;
  } else {
    selectedGift.quantity = 1;
    state.selectedGifts.push(selectedGift);
  }
  console.log("update state", gift, state);
  return state;
};

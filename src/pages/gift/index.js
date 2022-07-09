import { navigateTo } from "../../helper";
import { $page } from "@tiki.vn/redux-miniprogram-bindings";

$page({
  mapState: [
    (state) => ({
      selectedGifts: state.gift.selectedGifts,
    }),
  ],
})({
  data: {
    selectedGifts: [],
  },
  navigateToGiftList() {
    navigateTo("gift-list");
  },
  onRemoveGift(e) {
    // TODO: Remove gift
    const { productId } = e.target.dataset;
    console.log("Remove e", productId);
  },
  onLoad(query) {},
  onReady() {},
  onShow() {},
  onHide() {},
  onUnload() {},
});

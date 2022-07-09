import { navigateTo } from "../../helper";
import { $page } from "@tiki.vn/redux-miniprogram-bindings";
import { removeGift, sendGift, resetGift } from "../../store/actions/gift";

$page({
  mapState: [
    (state) => ({
      selectedGifts: state.gift.selectedGifts,
      isProcessingSendGift: state.gift.isProcessingSendGift,
    }),
  ],
  mapDispatch: { removeGift, sendGift, resetGift },
})({
  data: {
    selectedGifts: [],
    customerPhone: null,
    note: null,
  },
  async onSubmit(e) {
    await this.sendGift(e.detail.value);
    await this.resetGift();
    this.setData({
      customerPhone: null,
      note: null,
    });
  },
  onInputChange(e) {
    console.log(e);
  },
  navigateToGiftList() {
    navigateTo("gift-list");
  },
  async onRemoveGift(e) {
    const { productId } = e.target.dataset;
    console.log("Remove e", productId);
    await this.removeGift(productId);
  },
  onLoad(query) {},
  onReady() {},
  onShow() {},
  onHide() {},
  onUnload() {},
});

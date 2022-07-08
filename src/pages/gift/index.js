import { navigateTo } from "../../helper";

Page({
  data: {
    gifts: [
      {
        id: 1,
        src: "/assets/product_3.png",
      },
    ],
  },
  navigateToGiftList() {
    navigateTo('gift-list')
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

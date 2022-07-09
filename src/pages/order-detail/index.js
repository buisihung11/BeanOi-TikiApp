import { $page } from "@tiki.vn/redux-miniprogram-bindings";

import { queryToObj } from "../../helper";
import { constants as c } from "../../constants";
import { getOrderById } from "../../store/actions/order";
import  apiOrders  from "../../services/order/index";

$page({
  mapState: [
    (state) => ({
      storeLocation: state.store.selectedLocation,
      timeSlot: state.store.selectedTimeSlot,
      products: state.cart.products,
      checkoutRes: state.cart.checkoutRes
    }),
  ],
  mapDispatch: { getOrderById },
})({
  data: {
    status: c.LOADING,
    isShowModal: false,
    statusTitle: {
      [c.DELIVERING]: "Delivering",
      [c.PREPARING]: "Preparing",
      [c.DELIVERED]: "Delivered",
      [c.FAIL]: "Delivery failed",
      [c.COMPLETED]: "Order completed",
      [c.RECEIVED]: "Order received",
      [c.READY]: "Ready for pickup",
    },
    bgList: {
      [c.DELIVERY]: {
        [c.DELIVERING]: "/assets/bg_delivery_progress.png",
        [c.PREPARING]: "/assets/bg_delivery_prepare.png",
        [c.DELIVERED]: "/assets/bg_delivery_success.png",
        [c.FAIL]: "/assets/bg_delivery_fail.png",
      },
      [c.STORE_PICKUP]: {
        [c.COMPLETED]: "/assets/bg_store_pickup_completed.png",
        [c.RECEIVED]: "/assets/bg_store_pickup_received.png",
        [c.READY]: "/assets/bg_store_pickup_ready.png",
      },
    },
  },
  async onLoad(query) {
    const orderId = queryToObj(query).orderId;
    const res = apiOrders.getOrderById(orderId);
    console.log(res);
    console.log(this.data.checkoutRes);
    console.log(this.data.timeSlot);
    console.log(this.data.storeLocation);
    my.setNavigationBar({ title: `Đơn hàng ${orderId}` });
    my.set
    // await this.getOrderById(orderId);
    this.setData({
      status: c.SUCCESS,
      order: res,
    });
  },
  onShowModal() {
    // this.setData({
    //   isShowModal: true,
    // });
    my.navigateToMiniProgram("https://www.facebook.com/beanoivn")
  },
  onHideModal() {
    this.setData({
      isShowModal: false,
    });
  },
});

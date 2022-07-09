/* eslint-disable no-undef */
import { $page } from "@tiki.vn/redux-miniprogram-bindings";

import { getData } from "../../services";
import { constants as c } from "../../constants";
import { navigateTo, queryToObj, redirectTo } from "../../helper";
import { getAllStore } from "../../store/actions/store";
import { getBuyerInfo } from "../../store/actions/buyer";
import { getAllCategories } from "../../store/actions/category";

import { calPosList } from "./helper";
import apiProducts from "../../services/product";
$page({
  mapState: [
    (state) => ({
      categories: state.category.list,
      buyer: state.buyer,
      store: state.store.defaultStore,
      cart: state.cart,
      currentTimeSlot: state.store.selectedTimeSlot
    }),
  ],
  mapDispatch: { getAllCategories, getBuyerInfo, getAllStore },
})({
  data: {
    topHeight: 0,
    currentPos: 0,
    // supProList: null,
    currentTag: "",
    orderMethod: "",
    status: c.LOADING,
    holderStatus: "none",
  
  },
  async onLoad(query) {
    const supplierId = queryToObj(query).supplierId;
    const supplierName = queryToObj(query).supplierName.split("+").join(" ");
    // await this.getStoreById(id);
    const supProList = await apiProducts.getProductsBySupplierId(supplierId, this.data.currentTimeSlot);
   


    let title = "Cửa hàng";
    const orderMethod = queryToObj(query).method;

    // if (orderMethod === c.DELIVERY) title = "Delivery";
    my.setNavigationBar({ title });

    // if (orderMethod === c.DELIVERY && this.data.buyer.status === c.LOADING) {
    //   await this.getBuyerInfo();
    // }
    // if (!this.data.store) {
    //   await this.getAllStore();
    // }
    const categories = await getData("categories");
    this.setData({
      categories,
      status: c.SUCCESS,
      orderMethod,
      supProList,
      supplierName
    });
    // my.addIconsToNavigationBar({
    //   icons: [
    //     {
    //       image: "/assets/search_icon.png",
    //       width: 24,
    //       height: 24,
    //     },
    //   ],
    //   padding: 10,
    // });
    // if (!this.data.supProList) {
    //   const supProList = await apiProducts.getProductsBySupplierId(supplierId);
    //   console.log(supProList);
    //   console.log(categories);
    //    const supProList = await calPosList(this.data.categories);
    //   this.setData({
    //     supProList,
    //   });
    // }
  },
  onShow() {
    const pages = getCurrentPages();
    const pagePath = pages[pages.length - 1].route;
    if (pagePath && pagePath !== "pages/supplier-detail/index") {
      redirectTo("supplier-detail", { method: this.data.orderMethod });
    }
  },
  // async onTagClick(e) {
  //   if (!this.data.supProList) {
  //     // const supProList = await calPosList(this.data.categories);
  //     const supProList = await apiProducts.getProductsBySupplierId(supplierId);
  //     console.log(supProList);
  //     console.log(categories);
  //     this.setData({
  //       supProList,
  //     });
  //   }
  //   const { id } = e.target;

  //   const [top] = await new Promise((resolve) => {
  //     my.createSelectorQuery()
  //       .selectViewport()
  //       .select(`#${id}`)
  //       .boundingClientRect()
  //       .scrollOffset()
  //       .exec((ret) => {
  //         resolve([ret[0].top]);
  //       });
  //   });
  //   // new pos = pos of tag section in page - header height - (pos of category tag - header height)
  //   //         = pos of tag section in page - pos of category tag

  //   this.setData({
  //     ...this.data,
  //     supProList,
  //     // currentPos: this.data.supProList[id] - top,
  //     holderStatus: "active",
  //     currentTag: id.replace("_", ""),
  //   });
  //   setTimeout(() => {
  //     this.setData({ ...this.data, holderStatus: "none" });
  //   }, 500);
  // },
  // async backToTop() {
  //   await this.onTagClick({
  //     target: { id: `_${this.data.categories[0]._id}` },
  //   });
  // },
  onProductClick(e) {
    // const { _id: id, name } = p;
    const productId = e.target.dataset.productId;
    navigateTo("product-detail", { method: this.data.orderMethod, productId });
  },
  // onCustomIconEvent(e) {
  //   navigateTo("product-search", { method: this.data.orderMethod });
  // },
});

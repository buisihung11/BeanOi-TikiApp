import { getData } from "../../services";
import apiStores from "../../services/stores";
import apiSuppliers from "../../services/supplier";


// Page
Page({
  data: {
    status: "LOADING",
    headerType: "DEFAULT",
    campaigns: [1, 2, 3, 4],
    banners: [1, 2, 3],
    stores: "",
    suppliers: [],
  },
  async loadData() {
    try {
      const [banners, campaigns] = await Promise.all([
        getData("banners"),
        getData("campaigns"),
      ]);
      const stores = await apiStores.getStores();
      console.log(stores);
      console.log("adress", stores.locations[0].address);
      const suppliers = await apiSuppliers.getSuppliers();
      console.log("supplier", suppliers);

      this.setData({
        ...this.data,
        banners,
        campaigns,
        status: "SUCCESS",
        stores,
        suppliers
      });
    } catch (err) {
      console.log(err);
      this.setData({
        status: "FAILURE",
      });
    }
  },
  async onLoad() {
    this.loadData();
  },
  onShow() {
    my.setCanPullDown({ canPullDown: false });
  },
  onPageScroll(e) {
    if (e.scrollTop === 0)
      this.setData({
        ...this.data,
        headerType: "DEFAULT",
      });
    if (e.scrollTop >= 16)
      this.setData({
        ...this.data,
        headerType: "SCROLLED",
      });
  },

});

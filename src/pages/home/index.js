import { getData } from "../../services";
import  apiStores  from "../../services/stores";
import { getData } from '../../services';
import { $page } from "@tiki.vn/redux-miniprogram-bindings";

import { getAllStore, changeDefaultStore } from "../../store/actions/store";
import { navigateTo } from "../../helper";
// Page
Page({
  data: {
    status: "LOADING",
    headerType: "DEFAULT",
    campaigns: [1, 2, 3, 4],
    banners: [1, 2, 3],
    stores: [],
  },
  async loadData() {
    try {
      const [banners, campaigns, stores] = await Promise.all([
        getData('banners'),
        getData('campaigns'),
         getData('stores')
      ]);
      const stores = await apiStores.getStores();
      console.log(stores);
      console.log("adress", stores.locations[0].address)

      this.setData({
        ...this.data,
        banners,
        campaigns,
        status: 'SUCCESS',
        stores,
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

import { getData } from '../../services';
import { $page } from "@tiki.vn/redux-miniprogram-bindings";

import { getAllStore, changeDefaultStore } from "../../store/actions/store";
import { navigateTo } from "../../helper";
// Page
$page({
  mapState: [
    (state) => ({
      stores: state.store.list,
    }),
  ],
  mapDispatch: { getAllStore, changeDefaultStore },
})({
  data: {
    status: 'LOADING',
    headerType: 'DEFAULT',
    campaigns: [1, 2, 3, 4],
    banners: [1, 2, 3],

  },
  async loadData() {
    try {
      const [banners, campaigns] = await Promise.all([
        getData('banners'),
        getData('campaigns'),
   
      ]);
      await this.getAllStore();     
      this.setData({
        ...this.data,
        banners,
        campaigns,
        status: 'SUCCESS',
        stores: this.data.stores.data,

      });
    } catch (err) {
      this.setData({
        status: 'FAILURE',
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
        headerType: 'DEFAULT',
      });
    if (e.scrollTop >= 16)
      this.setData({
        ...this.data,
        headerType: 'SCROLLED',
      });
  },
  onStoreSelect(e) {
    const id = e.target.dataset.id;
    this.changeDefaultStore(id);
    navigateTo("store-detail", { id });
  },
});

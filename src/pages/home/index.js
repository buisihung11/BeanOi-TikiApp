import { getData } from "../../services";
import apiStores from "../../services/stores";
import apiSuppliers from "../../services/supplier";

<<<<<<< HEAD

=======
import {
  getAllLocations,
  getAllStore,
  changeDefaultStore,
  setTimeSlotAction,
} from "../../store/actions/store";
import { navigateTo } from "../../helper";
>>>>>>> master
// Page
$page({
  mapState: [
    (state) => ({
      status: state.store.status,
      headerType: "DEFAULT",
      campaigns: [1, 2, 3, 4],
      banners: [1, 2, 3],
      selectedTimeSlot: state.store.selectedTimeSlot,
      stores: state.store.stores,
      locations: state.store.locations,
      selectedLocation: state.store.selectedLocation,
      suppliers: state.store.suppliers,
    }),
  ],
  mapDispatch: { getAllStore, changeDefaultStore, getAllLocations },
})({
  async loadData() {
    try {
      await this.getAllStore();
      await this.getAllLocations();
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

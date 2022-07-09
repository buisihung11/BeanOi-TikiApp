import { splitStoreArray } from "./helper";
import { navigateTo } from "../../helper";

Component({
  props: {
    status: "LOADING",
    suppliers: [],
    onSelect() {},
  },
  methods: {
    onSelect(e) {
      const supplierId = e.target.dataset.id;
      const supplierName = e.target.dataset.title;
      // this.props.onSelect(e);
     
     navigateTo("supplier-detail", { supplierId, supplierName });
    },
    onTimeSelect(e) {
      const time = e.target.dataset.time;
      console.log("time", e, time);
      this.setTimeSlotAction([time.from, time.to]);

    },
    onLocationChange(e) {
      this.setData({
        idx: e.detail.value,
      });
      this.setLocationAction(e.detail.value);
    },
  },
  // didMount() {
  //   this.setData({
  //     ...splitStoreArray(this.props.stores),
  //   });
  // },
  // didUpdate() {
  //   this.setData({
  //     ...splitStoreArray(this.props.stores),
  //   });
  // },
});

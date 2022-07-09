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

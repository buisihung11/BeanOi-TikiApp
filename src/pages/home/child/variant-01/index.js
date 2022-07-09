<<<<<<< HEAD

=======
import {
  changeDefaultStore,
  setTimeSlotAction,
  setLocationAction,
} from "../../../../store/actions/store";
import { navigateTo } from "../../../../helper";
>>>>>>> master

import { $component } from "@tiki.vn/redux-miniprogram-bindings";

$component({
  mapState: [
    (state) => ({
      suppliers: state.store.suppliers,
      stores: state.store.stores,
      selectedTimeSlot: state.store.selectedTimeSlot,
      locations: state.store.locations,
      selectedLocation: state.store.selectedLocation,
    }),
  ],
  mapDispatch: { setTimeSlotAction, setLocationAction },
})({
  props: {
    headerType: "",
    // stores: "",
    banners: [],
    status: "",
    campaigns: [],
<<<<<<< HEAD
  },
  // methods:{
  //   onStoreSelect(e) {
  //     const id = e.target.dataset.id;
  //     changeDefaultStore(id);
  //     navigateTo("store-detail", { id });
  //   },
  // }
}
);
=======
    // suppliers: [],
    selectedLocation: "",
    selectedTime: [],
    idx: 0,
  },
  methods: {
    onStoreSelect(e) {
      const id = e.target.dataset.id;
      changeDefaultStore(id);
      navigateTo("store-detail", { id });
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
});
>>>>>>> master


import { changeDefaultStore } from "../../../../store/actions/store";
import { navigateTo } from "../../../../helper";

Component({
  props: {
    headerType: "",
    stores: "",
    banners: [],
    status: "",
    campaigns: [],
    stores: [],
  },
  methods:{
    onStoreSelect(e) {
      const id = e.target.dataset.id;
      changeDefaultStore(id);
      navigateTo("store-detail", { id });
    },
  }
}
);

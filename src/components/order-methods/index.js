import { navigateTo } from "../../helper";
import { createParty, joinParty } from "../../store/actions/party";
import { $component } from "@tiki.vn/redux-miniprogram-bindings";

$component({
  mapState: [
    (state) => ({
      status: state.store.status,
    }),
  ],
  mapDispatch: { createParty, joinParty },
})({
  // props: {
  //   status: "LOADING",
  // },
  data: {
    orderMethods: [
      {
        code: "STORE_PICKUP",
        title: "Store pickup",
        subTitle: "Best quality",
        image: "/assets/deliver_1.png",
      },
      {
        code: "DELIVERY",
        title: "Delivery",
        subTItle: "Always on time",
        image: "/assets/deliver_2.png",
      },
    ],
  },
  methods: {
    onReservationSelect() {
      navigateTo("online-reservation");
    },
    onReservationsListSelect() {
      this.createParty();
    },
    onLeftButtonClick() {
      navigateTo("reservations");
    },
  },
});

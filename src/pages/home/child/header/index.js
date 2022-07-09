Component({
  props: {
    type: "FULL",
    stores: "",
    onTimeSelect(e) {},
    onLocationChange(e) {},
    idx: 0,
  },

  methods: {
    onTimeSelect(e) {
      this.props.onTimeSelect(e);
    },
    onLocationChange(e) {
      // console.log("arrayObject", e.detail.value);
      // this.setData({
      //   idx: e.detail.value,
      // });
      this.props.onLocationChange(e);
    },
  },
});

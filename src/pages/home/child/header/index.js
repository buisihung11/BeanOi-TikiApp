Component({
  props: {
    type: "FULL",
    stores: "",
    onTimeSelect() {},
  },

  onTimeSelect(e) {
    this.props.onTimeSelect(e);
  },
});

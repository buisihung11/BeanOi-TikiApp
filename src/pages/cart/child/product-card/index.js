Component({
  props: {
    status: "LOADING",
    onChangeItemNumber() {},
    onChangeItemNumberInput() {},
  },
  didUpdate() {},
  methods: {
    onIncrease() {
      this.props.onChangeItemNumber(
        this.props.id,
        1,
        this.props.cartItem.number
      );
    },
    onDecrease() {
      this.props.onChangeItemNumber(
        this.props.id,
        -1,
        this.props.cartItem.number
      );
    },
    onInput(e) {
      this.props.onChangeItemNumberInput(
        this.props.id,
        e.detail.value,
        this.props.cartItem.number
      );
    },
  },
});

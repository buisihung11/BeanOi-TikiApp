Component({
  props: {
    onShowCouponInput() {},
    onCheckout() {},
  },
  onInit() {},
  methods: {
    onShowCouponInput() {
      if (this.props.cart.coupon.status === 'NONE')
        this.props.onShowCouponInput();
    },
    onResetCoupon() {
      this.props.onResetCoupon();
    },
    onCheckout() {
       this.props.onCheckout();

      console.log(this.props.cart);
    },
  },
});

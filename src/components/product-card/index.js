Component({
  props: {
    product: {},
    onSelect() {},
    status: 'SUCCESS',
  },
  methods: {
    onSelect() {
      console.log('on selecct');
      this.props.onSelect(this.props.product);
    },
  },
});

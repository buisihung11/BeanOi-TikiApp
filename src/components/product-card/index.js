import {navigateTo} from "../../helper"

Component({
  props: {
    product: {},
    onSelect() {},
    status: 'SUCCESS',
  },
  methods: {
    onSelect() {
      console.log('on select');
      this.props.onSelect(this.props.product);
    },
  },
});

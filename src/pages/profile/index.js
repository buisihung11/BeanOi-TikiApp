import myx from "../../helper/myx";
import { $page } from "@tiki.vn/redux-miniprogram-bindings";
import { setUserInfo } from "../../store/actions/auth";

$page({
  mapState: [(state) => ({ user: state.auth.user })],
  mapDispatch: { setUserInfo },
})({
  data: {
    status: "LOADING",
    headerType: "DEFAULT",
  },
  async onLogin() {
    const res = await myx.getAuthCode();
    const userInfo = await myx.getUserInfo();
    console.log("auth", res.authCode, userInfo);
    await this.setUserInfo({ ...userInfo, authCode: res.authCode });
  },
  loadData() {},

  onLoad(query) {},

  onPageScroll(e) {
    if (e.scrollTop >= 50)
      this.setData({
        ...this.data,
        headerType: "SCROLLED",
      });
  },
  onPhoneCall() {
    my.makePhoneCall({
      number: "0342909090",
      success: (res) => {},
      fail: (e) => {},
    });
  },
});

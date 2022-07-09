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
    needRegister: false,
  },
  async registerUser() {
    const req = {
      authCode: this.data.authCode,
      email: this.data.user.email,
      name: this.data.user.name,
      phone: this.data.phone,
    };
    console.log(req);
  },
  onChangePhone(e) {
    this.setData({
      phone: e.detail.value,
    });
  },
  async onLogin() {
    console.log('PROCESSING AUTH CODE');
    const res = await myx.getAuthCode();
    const userInfo = await myx.getUserInfo();
    console.log("auth", res.authCode, userInfo);
    if (!userInfo.phone && !userInfo.phoneNumber) {
      this.setData({
        needRegister: true,
      });
    } else {
      // TODO: Send login with tiki to server
      // TODO: Save accessToken and get userInfo
      await this.setUserInfo({ ...userInfo, authCode: res.authCode });
    }
    
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

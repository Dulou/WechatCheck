// login.js
Page({
  data: {
    username: '',
    password: ''
  },
  bindUserName: function (e) {
    this.setData({
      username: e.detail.value
    });
  },
  bindPassWord: function (e) {
    this.setData({
      password: e.detail.value
    });
  },
  loginBtn: function () {
    if (this.data.username == "goach" && this.data.password == "123456") {
      wx.switchTab({
        url: '../index/index',
      })
    } else {
      wx.showModal({
        title: "用户名或密码不正确",
        showCancel: false,
        duration: 2000
      });
    }
  },
})
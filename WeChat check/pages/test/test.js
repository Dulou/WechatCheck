// pages/test/test.js
var inputurl = [];
Page({

  /**
   * 页面的初始数据
   */
  data: {
  article : '',
  response :''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  
  changeText: function () {
    // this.data.text = 'changed data'  // bad, it can not work
    this.setData({
      text: 'changed data'
    })
  },
  URLInput: function(e){
    this.setData({
      article: 'article=' + e.detail.value
    })

  },
  
  upload: function () {

    var that = this;
    wx.request({
      url: 'http://140.143.250.75/post', 
      data: that.data.article,
      header: {
         'content-type': 'application/x-www-form-urlencoded'
          },
      method: 'POST',
      success: function (res) {
        console.log('submit success');
        console.log(res.data);
        that.setData({
          response: res.data
        })
      },
      fail: function (res) {
        console.log('submit fail');
      },
      complete: function (res) {
        console.log('submit complete');
      }  
      
      })
      }
  

})
// pages/notice/notice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
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
  onShareAppMessage: function (options) {
    console.log(this.data)
    console.log(options.webViewUrl)
    //console.log(getApp().globalData.iv)
    return {
      title: '本群排行榜在此，第一竟然是？',
      path: '/pages/index/index',
      success(res) {
        var shareTicket = res.shareTickets[0] // 获取 shareTicket
        // console.log(shareTicket) // 你可以选择将这段代码取消注释，让 shareTicket 在控制台输出
        wx.getShareInfo({
          shareTicket: shareTicket,
          complete(res) {
            //console.log(res) // 输出加密后的 openGId 信息

          }
        })
      }
    }
  }
})
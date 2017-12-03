// pages/notice/notice.js
const app = getApp()

Page({
  data: {
    userInfo: {},

  },
  //事件处理函数
  


  onLoad: function () {
    wx.showShareMenu({
      withShareTicket: true //要求小程序返回分享目标信息
    })

  console.log('onload')
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    
    }else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
         
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
    
    })
 

  },
  // 其他的页面函数、生命周期函数等
  onShareAppMessage() {

    return {
      title: '页面分享标题',
      path: '/pages/index/index',
      success(res) {
        console.log(res.shareTickets[0]) // 奇怪为什么 shareTickets 是个数组？这个数组永远只有一个值。
      }
    }

  },

})
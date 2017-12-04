// pages/notice/notice.js
const app = getApp()

Page({
  data: {
    userInfo: { 
      
    },

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
      
    
      console.log('1')
 
    
  } 
  },

  // 其他的页面函数、生命周期函数等
  onShareAppMessage() {

    return {
      title: '本群排行榜在此，第一竟然是？',
      path: '/pages/index/index',
      success(res) {
        console.log(res.shareTickets[0]) // 奇怪为什么 shareTickets 是个数组？这个数组永远只有一个值。
      }
    }

  },

})
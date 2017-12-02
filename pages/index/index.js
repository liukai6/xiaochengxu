// pages/home/home.js
var app = getApp()
var mydata = app.globalData
var thiz = this
Page({
  data: {
    weburl: ''
  },
    onShow(){
      console.log('index')
      wx.showShareMenu({
        withShareTicket: true
      })
      console.log('onShow')


      console.log('onReady')
      console.log(mydata)
      this.setData({
        'weburl': 'https://lyqpgm.wishstart.com.cn/bflyhdapp/game.html?v=' + Math.random() + '&key1=' + mydata.code + "&key2=" + encodeURIComponent(mydata.iv) + "&key3=" + encodeURIComponent(mydata.encryptedData)
      })    
    },
      onShareAppMessage: function (options) {
      console.log(this.data)
      console.log(options.webViewUrl)
      //console.log(getApp().globalData.iv)
      return {
        title: '本群排行榜在此，第一竟然是？',
        path: '/pages/home/home',
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

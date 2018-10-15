//index.js
const app = getApp()

Page({
  data: {
  },

  onLoad: function() {
    console.log(app)
  },

  onTap: function(e) {
    wx.redirectTo({
      url: '/pages/read/read',
    })
  }

})

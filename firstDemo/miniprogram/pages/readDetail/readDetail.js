// pages/readDetail/readDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collected: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (wx.getStorageSync('key')) {
      this.setData({
        collected: true
      });
    } else {
      this.setData({
        collected: false
      });
    }
  },
  
  catchImg: function(e) {
    if (wx.getStorageSync('key')) {
      this.setData({
        collected: false
      });
      wx.removeStorage({
        key: 'key',
        success: function(res) {},
      });
      wx.showToast({
        title: '取消成功！',
      })
    } else {
      wx.setStorageSync('key', true)
      this.setData({
        collected: true
      });
      wx.showToast({
        title: '收藏成功！',
        icon: 'loading',
        success: ()=> {
          console.log(this)
        }
      })
    }
    
  },

  shareImg() {
    wx.showActionSheet({
      itemList: ['dsdsad','dsdddddddddddd'],
    })
  },

  onMusic() {
    console.log(1)
    /* wx.playBackgroundAudio({
      dataUrl: 'http://ovhvevt35.bkt.clouddn.com/photo/%E5%A5%BD%E5%A6%B9%E5%A6%B9%E4%B9%90%E9%98%9F%20-%20%E4%B8%8D%E8%AF%B4%E5%86%8D%E8%A7%81.mp3',
      title: 'music'
    }); */
    let a = wx.getBackgroundAudioManager();
    a.src = 'http://ovhvevt35.bkt.clouddn.com/photo/%E5%A5%BD%E5%A6%B9%E5%A6%B9%E4%B9%90%E9%98%9F%20-%20%E4%B8%8D%E8%AF%B4%E5%86%8D%E8%A7%81.mp3c';
    a.play()
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

  }
})
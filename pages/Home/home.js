// pages/Home/home.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 页面配置  

    winWidth: 0,

    winHeight: 0,

    // tab切换

    currentTab: 0,

  },
  showRule: function () {
    this.setData({
      isRuleTrue: true
    })
  },
  //关闭透明层
  hideRule: function () {
    this.setData({
      isRuleTrue: false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this
    wx.request({
      url: 'https://www.easy-mock.com/mock/5bc320ecb0bf35423bd75398/ele/seller',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res),
          // 将获取到的json数据，存在名字叫list的这个数组中
          that.setData({
            list: res.data.seller,
            //res代表success函数的事件对，data是固定的，list是数组
          })
      }
    }),
     wx.request({
        url: 'https://www.easy-mock.com/mock/5bc320ecb0bf35423bd75398/ele/ratings',
        headers: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
            wx.setStorage({
            key: "pinglunshuju",
            data: res.data.ratings
            })
        }
      })
   
    // 获取系统信息

    wx.getSystemInfo({

      success: function (res) {

        that.setData({

          winWidth: res.windowWidth,

          winHeight: res.windowHeight

        });

      }

    });
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
  // // 滑动切换tab
  bindChange: function (e) {

    var that = this;

    that.setData({ currentTab: e.detail.current });

  },
  // 点击tab切换

  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {

      return false;

    } else {

      that.setData({

        currentTab: e.target.dataset.current

      })

    }

  }
})
// pages/components/bussines/bussines.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    list: []
  },
  attached() {
    var that = this
    wx.request({
      url: 'https://www.easy-mock.com/mock/5bc320ecb0bf35423bd75398/ele/seller',
      type: 'GET',
      success: function (res) {
        that.setData({
          list: res.data.seller
        })
        // console.log(that.data.list)
      }
    })
  },


  /**
   * 组件的方法列表
   */
  methods: {

  }
})

// pages/home/home.js
// import { Home } from 'home-module.js'
// var home = new Home
Component({

  
  data: {
    list: [],
    list2: [],
     foodstype: "",

    // foodstype: "",
  },
  ready () {
    var that = this
    wx.request({
      url: 'https://www.easy-mock.com/mock/5bc320ecb0bf35423bd75398/ele/goods',
      success: function (res) {
        console.log(res),
          that.setData({
            list: res.data.goods,
            list2: res.data.goods
          })
      }
    })
  },
  //获取它的type
  
   methods:{
    showfoods: function (e) {
    this.setData({
      foodstype: e.currentTarget.dataset.type
    })
  },
  },

  //获取它的type
  // showfoods: function (e) {
  //   this.setData({
  //     foodstype: e.currentTarget.dataset.type
  //   })
  // },
 

})
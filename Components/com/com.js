// Components/com/com.js
Component({
 
  data: {
    

  },
  created() {
    var that = this
    wx.getStorage({
      key: 'pinglunshuju',
      success(res) {
        console.log(res.data)
        that.setData({
          list: res.data
          //res代表success函数的事件对，data是固定的，list是数组
        })

      }
    })
  },
 


})

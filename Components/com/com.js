// Components/com/com.js
Component({
 
  data: {
    flag1: false,
    flag2: false,
    flag3: false,
    iconType: [
      'success'
    ]

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
  methods: {
    All: function () {
      this.setData({
        flag1: false,
        flag2: true,
        flag3: true
      })
    },
    goods: function () {
      this.setData({
        flag1: true,
        flag2: false,
        flag3: true
      })
    },
    notgood: function () {
      this.setData({
        flag1: true,
        flag2: true,
        flag3: false
      })
    }
  }
 


})

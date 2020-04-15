//index.js
const app = getApp()

Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    windowHeight: wx.getSystemInfoSync().windowHeight,
    proList:[
      {
        id:1,
        proUrl:'../../images/p1.jpg',
        proTitle:'一号',
        proDec:'备注',
        proPrice:"58",
        index:1

      },
      {
        id:2,
        proUrl:'../../images/p1.jpg',
        proTitle:'一号',
        proDec:'备注',
        proPrice:"58",
        index: 2

      },
      {
        id:3,
        proUrl:'../../images/p1.jpg',
        proTitle:'一号',
        proDec:'备注',
        proPrice:"58",
        index: 3

      },

    ]
  },

  onLoad: function() {
    // if (!wx.cloud) {
    //   wx.redirectTo({
    //     url: '../chooseLib/chooseLib',
    //   })
    //   return
    // }
  },

  
  getSelectItem:function(e) {
    var that = this
    var itemWidth = e.detail.scrollWidth / that.data.proList.length;//每个图片的宽度
    var scrollLeft = e.detail.scrollLeft;//滚动宽度
    var curIndex = Math.round(scrollLeft / itemWidth);//通过Math.round方法对滚动大于一半的位置进行进位
    for (var i = 0, len = that.data.proList.length; i < len; ++i) {
        that.data.proList[i].selected = false;
    }
    that.data.proList[curIndex].selected = true;
    that.setData({
        proList: that.data.proList,
        giftNo: this.data.proList[curIndex].id
    });
  }
   
})

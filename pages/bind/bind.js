Page({
  data: {
    focus: false,
    inputValue: ''
  },
  onLoad: function(options) {
    // 生命周期函数--监听页面加载
    this.setData({
      title: options.title

    })
  }
})
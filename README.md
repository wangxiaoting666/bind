# 小程序扫码成功后带着参数跳转到指定页面




要扫的二维码，通过草料二维码生成的，这个网站挺好的，用起来比较简单方便，可以直接输入文字生成二维码，也可以放入链接生成二维码。

草料二维码：https://cli.im/




index.wxml
```
<view class="container">
  <button bindtap='getScancode'>绑定车辆</button>
</view>

```

index.js
```
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    result: ''

  },

  onLoad: function() {

  },

  getScancode: function() {
    var _this = this;
    // 允许从相机和相册扫码
    wx.scanCode({
      success: (res) => {
        wx.navigateTo({
          url: '../navigator/navigator?title=' + res.result

        })
        var result = res.result;

        _this.setData({
          result: result,

        })
      }
    })

  }

})
```

navigator.wxml
```
<view> {{title}} </view>

```
navigator.js
```
Page({
  data: {},
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    this.setData({
      title: options.title
     
    })
  }
})
```
简单的效果：没有写css相关的代码了，主要是实现这个过程

![](https://upload-images.jianshu.io/upload_images/5640239-c11d57e9ae391a15.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


#更加详细的demo：（项目之中实现了一下）

index.wxml
```
<!-- 底部的按钮 -->
<button class='Scancode' bindtap='getScancode'>绑定车辆</button>
```

index.wxss
```
/* 底部按钮 */
.Scancode {
  font-size: 39rpx;
  background: #010101;
  position: fixed;
  bottom: 35rpx;
  display: flex;
  width: 90%;
  justify-content: center;
  
  color: #fff;
  border-radius:10rpx;
  margin-left:30rpx;
  margin-right: 30rpx;
  z-index:999;
}
```

index.js
```
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    result: ''
  },

  onLoad: function() {

  },

  getScancode: function() {
    var _this = this;
    // 允许从相机和相册扫码
    wx.scanCode({
      success: (res) => {
        wx.navigateTo({
          url: '../bind/bind?title=' + res.result

        })
        var result = res.result;

        _this.setData({
          result: result,

        })
      }
    })

  }

})
```
要跳转到bind

bind.wxml
```
<view class='page_row'>
  <view class="search">

    <input class='carid' placeholder=" {{title}}" focus="{{focus}}" />
    <input class='carnumber' placeholder="请输入车牌号和驾驶证号码" focus="{{focus}}" />

    <button type="primary" size="{{primarySize}}" loading="{{loading}}" plain="{{plain}}" disabled="{{disabled}}" bindtap="primary"> 绑定</button>

  </view>
  <view class='tip'>
    定位标签和车辆绑定后即可看跟踪车辆位置
  </view>
</view>
    
```

bind.wxss
```
.search input {
  height: 100rpx;
  border-radius: 5px;
  border: 1px solid #d0d0d0;
  margin: 100rpx 30rpx;
  padding: 0 15rpx;
}

.search button {
  border-radius: 5px;
  border: 1px solid #d0d0d0;
  margin: 100rpx 30rpx;
}

.tip {
  text-align: center;
  font-size: 34rpx;
}

/* 搜索列表名称 */

.list_name {
  position: relative;
  width: 100%;
  height: 90rpx;
  line-height: 90rpx;
  border-bottom: 1rpx solid #ddd;
}

/* 列表名称 */

.lab_name {
  position: absolute;
  left: 30rpx;
}

```
bind.js
```

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
```
要扫的二维码
![图片.png](https://upload-images.jianshu.io/upload_images/5640239-063cad596aa00654.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

效果
![](https://upload-images.jianshu.io/upload_images/5640239-6989b9260594bb12.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

其余的二维码工具；[一个文艺的在线生成漂亮的二维码工具网站](https://www.jianshu.com/p/1edf4ab9853d)

顺手写的demo放在了github上面了，有需要的可以直接点击链接下载。
github地址：https://github.com/wangxiaoting666/bind

> 原文作者：祈澈姑娘。 技术博客：[https://www.jianshu.com/u/05f416aefbe1](https://www.jianshu.com/u/05f416aefbe1)
90后前端妹子一枚，爱编程，爱运营，爱折腾。长期坚持总结工作中遇到的技术问题。





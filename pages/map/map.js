// map.js
Page({
  data: {
    venueName: '北京朝阳区幸福大酒店',
    address: '北京市朝阳区幸福路88号',
    contactPhone: '010-88889999',
    latitude: 39.90469,  // 北京天安门坐标
    longitude: 116.40717, // 北京天安门坐标
    scale: 16,
    markers: [{
      id: 1,
      latitude: 39.90469,  // 北京天安门坐标
      longitude: 116.40717, // 北京天安门坐标
      width: 30,
      height: 30,
      callout: {
        content: '婚礼地点：北京朝阳区幸福大酒店',
        color: '#e74c3c',
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ffcccb',
        bgColor: '#ffffff',
        padding: 5,
        display: 'ALWAYS'
      }
    }],
    busInfo: '1路-幸福路南口\n2路-幸福路北口',
    drivingInfo: '北京市朝阳区幸福路88号'
  },

  onLoad() {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    });
    
    // 设置地图控件位置
    const mapCtx = wx.createMapContext('myMap');
    mapCtx.includePoints({
      points: [{
        latitude: this.data.latitude,
        longitude: this.data.longitude
      }],
      padding: [80]
    });
  },

  // 打开地图导航
  openLocation() {
    wx.openLocation({
      latitude: this.data.latitude,
      longitude: this.data.longitude,
      name: this.data.venueName,
      address: this.data.address,
      scale: 18
    });
  },

  // 复制地址
  copyAddress() {
    wx.setClipboardData({
      data: this.data.address,
      success: () => {
        wx.showToast({
          title: '地址已复制',
          icon: 'success'
        });
      }
    });
  },

  // 拨打电话
  makeCall() {
    wx.showModal({
      title: '联系我们',
      content: '确定要拨打电话 ' + this.data.contactPhone + ' 吗？',
      success: (res) => {
        if (res.confirm) {
          wx.makePhoneCall({
            phoneNumber: this.data.contactPhone.replace(/-/g, '')
          });
        }
      }
    });
  },

  onShareAppMessage() {
    return {
      title: '婚礼地址导航',
      path: '/pages/map/map',
      imageUrl: '/images/map-share.jpg'
    };
  },

  onShareTimeline() {
    return {
      title: '婚礼地址导航',
      query: '',
      imageUrl: '/images/map-share.jpg'
    };
  }
})

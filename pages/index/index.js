// index.js
Page({
  data: {
    groomName: '张先生',
    brideName: '李女士',
    weddingTime: '2025年10月1日 12:00',
    weddingLocation: '幸福大酒店·玫瑰厅',
    contactPhone: '13800138000/13900139000',
    weddingDateTime: '2025-10-01 12:00:00',
    shareImageUrl: 'https://wedding.tos-cn-shanghai.volces.com/resized_images/horizon_openai.png'
  },
  
  onLoad() {
    // 页面加载时执行的逻辑
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    });
  },
  
  onShareAppMessage() {
    return {
      title: this.data.groomName + ' & ' + this.data.brideName + '的婚礼邀请函',
      path: '/pages/index/index',
      imageUrl: this.data.shareImageUrl
    };
  },
  
  onShareTimeline() {
    return {
      title: this.data.groomName + ' & ' + this.data.brideName + '诚挚邀请您参加我们的婚礼',
      query: 'weddingTime=' + encodeURIComponent(this.data.weddingTime),
      imageUrl: this.data.shareImageUrl
    };
  }
})

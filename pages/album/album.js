// album.js
Page({
  data: {
    // 轮播图配置
    bannerPhotos: [
      {
        url: 'https://wedding.tos-cn-shanghai.volces.com/resized_images/horizon_openai.png',
        desc: '执子之手，与子偕老'
      },
      {
        url: 'https://wedding.tos-cn-shanghai.volces.com/resized_images/horizon_openai.png',
        desc: '愿得一人心，白首不相离'
      },
      {
        url: 'https://wedding.tos-cn-shanghai.volces.com/resized_images/horizon_openai.png',
        desc: '爱情，是心灵的共鸣'
      },
      {
        url: 'https://wedding.tos-cn-shanghai.volces.com/resized_images/horizon_openai.png',
        desc: '有你的日子，都是晴天'
      },
      {
        url: 'https://wedding.tos-cn-shanghai.volces.com/resized_images/horizon_openai.png',
        desc: '遇见你，是我最美丽的意外'
      },
      {
        url: 'https://wedding.tos-cn-shanghai.volces.com/resized_images/horizon_openai.png',
        desc: '一生守候，一世承诺'
      },
      {
        url: 'https://wedding.tos-cn-shanghai.volces.com/resized_images/horizon_openai.png',
        desc: '执子之手，与子偕老'
      },
      {
        url: 'https://wedding.tos-cn-shanghai.volces.com/resized_images/horizon_openai.png',
        desc: '愿得一人心，白首不相离'
      },
      {
        url: 'https://wedding.tos-cn-shanghai.volces.com/resized_images/horizon_openai.png',
        desc: '爱情，是心灵的共鸣'
      },
      {
        url: 'https://wedding.tos-cn-shanghai.volces.com/resized_images/horizon_openai.png',
        desc: '有你的日子，都是晴天'
      }
    ],
    // 照片墙配置
    photos: [
      {
        url: 'https://wedding.tos-cn-shanghai.volces.com/resized_images/vertical_openai.png',
        desc: '执子之手，与子偕老'
      },
      {
        url: 'https://wedding.tos-cn-shanghai.volces.com/resized_images/vertical_openai.png',
        desc: '愿得一人心，白首不相离'
      },
      {
        url: 'https://wedding.tos-cn-shanghai.volces.com/resized_images/vertical_openai.png',
        desc: '爱情，是心灵的共鸣'
      },
      {
        url: 'https://wedding.tos-cn-shanghai.volces.com/resized_images/vertical_openai.png',
        desc: '有你的日子，都是晴天'
      },
      {
        url: 'https://wedding.tos-cn-shanghai.volces.com/resized_images/vertical_openai.png',
        desc: '遇见你，是我最美丽的意外'
      },
      {
        url: 'https://wedding.tos-cn-shanghai.volces.com/resized_images/vertical_openai.png',
        desc: '一生守候，一世承诺'
      },
      {
        url: 'https://wedding.tos-cn-shanghai.volces.com/resized_images/vertical_openai.png',
        desc: '执子之手，与子偕老'
      },
      {
        url: 'https://wedding.tos-cn-shanghai.volces.com/resized_images/vertical_openai.png',
        desc: '愿得一人心，白首不相离'
      },
      {
        url: 'https://wedding.tos-cn-shanghai.volces.com/resized_images/vertical_openai.png',
        desc: '有你的日子，都是晴天'
      },
      {
        url: 'https://wedding.tos-cn-shanghai.volces.com/resized_images/vertical_openai.png',
        desc: '爱情，是心灵的共鸣'
      }
    ]
  },

  onLoad() {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    });
  },

  previewImage(e) {
    const index = e.currentTarget.dataset.index;
    const type = e.currentTarget.dataset.type || 'photos';
    let urls;
    
    if (type === 'banner') {
      urls = this.data.bannerPhotos.map(photo => photo.url);
    } else {
      urls = this.data.photos.map(photo => photo.url);
    }
    
    wx.previewImage({
      current: urls[index],
      urls: urls
    });
  },

  onShareAppMessage() {
    return {
      title: '我们的婚纱相册',
      path: '/pages/album/album',
      imageUrl: this.data.photos[0].url
    };
  },

  onShareTimeline() {
    return {
      title: '我们的婚纱相册',
      query: '',
      imageUrl: this.data.photos[0].url
    };
  }
})

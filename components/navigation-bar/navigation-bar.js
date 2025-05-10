Component({
  options: {
    multipleSlots: true,
    addGlobalClass: true
  },
  
  properties: {
    extClass: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: ''
    },
    background: {
      type: String,
      value: '#FFF'
    },
    color: {
      type: String,
      value: 'rgba(0, 0, 0, .9)'
    },
    back: {
      type: Boolean,
      value: true
    },
    loading: {
      type: Boolean,
      value: false
    },
    animated: {
      type: Boolean,
      value: true
    },
    homeButton: {
      type: Boolean,
      value: false
    },
    delta: {
      type: Number,
      value: 1
    }
  },
  
  data: {
    ios: false,
    statusBarHeight: 0,
    innerPaddingRight: '',
    leftWidth: '',
    innerWidth: undefined,
    windowWidth: undefined,
    renderLeft: true,
    renderCenter: true,
    renderRight: true
  },
  
  lifetimes: {
    attached() {
      try {
        const isSupport = !!wx.getMenuButtonBoundingClientRect;
        const rect = wx.getMenuButtonBoundingClientRect ? wx.getMenuButtonBoundingClientRect() : null;
        
        // 尝试使用新API，如果失败则回退到旧API
        let ios = false;
        let statusBarHeight = 0;
        let windowWidth = 375; // 默认值
        
        try {
          // 优先尝试新API
          const appBaseInfo = wx.getAppBaseInfo();
          const windowInfo = wx.getWindowInfo();
          
          // 安全地检查system属性
          if (appBaseInfo && appBaseInfo.system) {
            ios = appBaseInfo.system.toLowerCase().indexOf('ios') >= 0;
          }
          
          if (windowInfo) {
            statusBarHeight = windowInfo.statusBarHeight || 0;
            windowWidth = windowInfo.windowWidth || 375;
          }
        } catch (e) {
          // 如果新API不可用，回退到旧API
          const sysInfo = wx.getSystemInfoSync();
          ios = sysInfo.system.toLowerCase().indexOf('ios') >= 0;
          statusBarHeight = sysInfo.statusBarHeight || 0;
          windowWidth = sysInfo.windowWidth || 375;
        }
        
        this.setData({
          ios,
          statusBarHeight,
          innerWidth: isSupport ? `width:${rect.left}px` : '',
          innerPaddingRight: isSupport ? `padding-right:${windowWidth - rect.left}px` : '',
          leftWidth: isSupport ? `width:${rect.left}px` : '',
          safeAreaTop: ios ? `padding-top:${statusBarHeight}px` : ''
        });
      } catch (err) {
        console.error('导航栏初始化失败:', err);
        // 设置默认值以避免界面异常
        this.setData({
          ios: false,
          statusBarHeight: 20,
          innerWidth: '',
          innerPaddingRight: '',
          leftWidth: '',
          safeAreaTop: ''
        });
      }
    }
  },
  
  methods: {
    back() {
      const { delta } = this.data;
      wx.navigateBack({
        delta
      });
      this.triggerEvent('back', { delta }, {});
    },
    
    home() {
      wx.switchTab({
        url: '/pages/index/index'
      });
      this.triggerEvent('home', {}, {});
    }
  }
})

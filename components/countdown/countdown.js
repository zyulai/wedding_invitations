Component({
  properties: {
    targetDate: {
      type: String,
      value: '2025-06-15T12:00:00'  // 改为ISO格式，兼容iOS
    }
  },

  data: {
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
    timer: null
  },

  lifetimes: {
    attached() {
      this.countDown();
      this.data.timer = setInterval(() => {
        this.countDown();
      }, 1000);
    },
    detached() {
      if (this.data.timer) {
        clearInterval(this.data.timer);
      }
    }
  },

  methods: {
    countDown() {
      const now = new Date().getTime();
      // 修改为兼容iOS的日期解析方法
      let targetDateStr = this.properties.targetDate;
      // 如果是旧格式 (yyyy-MM-dd HH:mm:ss)，将其转换为兼容的格式 (yyyy-MM-ddTHH:mm:ss)
      if (targetDateStr.includes(' ')) {
        targetDateStr = targetDateStr.replace(' ', 'T');
      }
      const target = new Date(targetDateStr).getTime();
      const difference = target - now;

      if (difference < 0) {
        this.setData({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00'
        });
        clearInterval(this.data.timer);
        return;
      }

      // 计算天、时、分、秒
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      // 更新数据
      this.setData({
        days: days < 10 ? '0' + days : days,
        hours: hours < 10 ? '0' + hours : hours,
        minutes: minutes < 10 ? '0' + minutes : minutes,
        seconds: seconds < 10 ? '0' + seconds : seconds
      });
    }
  }
})
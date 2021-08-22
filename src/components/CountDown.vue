<template>
  <span>
    {{ countObj.showTime }}
  </span>
</template>
<script>
import dayjs from 'dayjs';
dayjs.extend(require('dayjs/plugin/duration'));
export default {
  name: 'CountDown',
  data() {
    return {
      countObj: {
        showTime: "00:00:00",
      },
      payTimer: null,
    }
  },
  mounted() {
    this.payTimer = setInterval(() => {
      this.countDown();
    }, 1000);
  },
  methods: {
    countDown() {
      let TodayEnd = dayjs().endOf('day').add(8,'h')
      let NowTime = dayjs().add(8,'h')
      let duration = dayjs.duration(TodayEnd - NowTime);
      let hours = duration.hours();
      let minutes = duration.minutes() % 60 < 10 ? '0' + (duration.minutes() % 60) : duration.minutes() % 60;
      let seconds = duration.seconds() % 60 < 10 ? '0' + (duration.seconds() % 60) : duration.seconds() % 60;
      if (hours <= 0 && minutes <= 0 && seconds <= 0) {
        clearInterval(this.payTimer);
      } else {
        this.countObj.showTime = `${hours}:${minutes}:${seconds}`;
      }
    }
  }
}
</script>

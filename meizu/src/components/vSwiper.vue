<template>
  <div class="swiper-wrap" :style="swiperSize">
    <div class="swiper" :style="swiperTransition">
      <div class="swiper-item" v-for="(item, index) in data" :key="index">
        <a :href="item.href">
          <img :style="swiperSize" :src="item.imgUrl" alt="">
        </a>
      </div>
      <div class="swiper-item" v-if="data.length>0">
        <a :href="data[0].href">
          <img :style="swiperSize" :src="data[0].imgUrl" alt="">
        </a>
      </div>
    </div>
    <ul class="pager">
      <li class="pager-item" v-for="(item, index) in data" :key="index" @click="changeItem(index)"
          :class="{active: nowSwiperIndex === index}">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'vSwiper',
  props: {
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    height: {
      type: Number,
      default() {
        return 500;
      },
    },
    width: {
      type: Number,
      default() {
        return 1240;
      },
    },
    delay: {
      type: Number,
      default() {
        return 3000;
      },
    },
  },
  data() {
    return {
      nowSwiperIndex: 0,
      timer: null,
      time: 0.3,
    };
  },
  computed: {
    swiperSize() {
      return {
        height: `${this.height}px`,
        width: `${this.width}px`,
      };
    },
    swiperTransition() {
      return {
        width: `${(this.data.length + 1) * this.width}px`,
        height: `${this.height}px`,
        transform: `translateX(-${this.width * this.nowSwiperIndex}px)`,
        transitionDuration: `${this.time}s`,
      };
    },
  },
  components: {

  },
  mounted() {
    this.swiperTimer();
  },
  methods: {
    swiperTimer() {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        if (this.nowSwiperIndex < this.data.length - 1) {
          this.nowSwiperIndex += 1;
          this.time = 0.3;
        } else {
          this.nowSwiperIndex = 0;
          this.time = 0;
        }
      }, this.delay);
    },
    changeItem(index) {
      clearInterval(this.timer);
      this.nowSwiperIndex = index;
      this.swiperTimer();
    },
  },
};
</script>

<style lang="less" scoped>
.swiper-wrap{
  position: relative;
  overflow: hidden;
  .swiper{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .pager{
    position: absolute;
    bottom: 20px;
    left: 400px;
    display: flex;
    .pager-item{
      width: 8px;
      height: 8px;
      border-radius: 50%;
      margin-right: 16px;
      background-color: #ccc;
    }
    .active{
      background-color: #fff;
    }
  }
}

</style>

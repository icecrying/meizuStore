<template>
  <div class="swiper-wrap" :style="swiperSize">
    <div class="swiper">
      <div class="swiper-item" v-for="(item, index) in data" :key="index" :style="swiperTransform">
        <a :href="item.href">
          <img :style="swiperSize" :src="item.imgUrl" alt />
        </a>
      </div>
      <div class="swiper-item" :style="swiperTransform" :key="data.length + 1">
        <!-- <a :href="data[0].href"> -->
          <img :style="swiperSize" :src="data[0].imgUrl" alt />
        <!-- </a> -->
      </div>
    </div>
    <ul class="pager">
      <li class="pager-item" v-for="(item, index) in data" :key="index"></li>
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
      }
    },
    height: {
      type: Number,
      default() {
        return 500;
      }
    },
    width: {
      type: Number,
      default() {
        return 1240;
      }
    },
    delay: {
      type: Number,
      default() {
        return 3000;
      }
    }
  },
  data() {
    return {
      nowSwiperIndex: 0,
      timer: null
    };
  },
  computed: {
    swiperSize() {
      return {
        height: `${this.height}px`,
        width: `${this.width}px`
      };
    },
    swiperTransform() {
      return {
        transform: `translateX(-${this.width * this.nowSwiperIndex}px)`,
        transition: 'transform .3s ease-in-out'
      };
    }
  },
  components: {},
  mounted() {
    this.swiperTab();
  },
  methods: {
    swiperTab() {
      clearInterval(this.timer);
      // console.log(this.data);
      this.timer = setInterval(() => {
        // console.log(this.data);
        if (this.nowSwiperIndex < this.data.length) {
          this.nowSwiperIndex += 1;
        } else {
          this.nowSwiperIndex = 0;
        }
      }, this.delay);
    }
  }
};
</script>

<style lang="less" scoped>
.swiper-wrap {
  position: relative;
  overflow: hidden;

  .swiper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>

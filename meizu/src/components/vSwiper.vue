<template>
  <div class="swiper-wrap" :style="swiperSize">
    <div class="swiper">
      <div class="swiper-item" v-for="(item, index) in data" :key="index">
        <a :href="item.href">
          <img :style="swiperSize" :src="item.imgUrl" alt="">
        </a>
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

    };
  },
  computed: {
    swiperSize() {
      return {
        height: `${this.height}px`,
        width: `${this.width}px`,
      };
    },
  },
  components: {

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
}

</style>

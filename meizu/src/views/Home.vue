<template>
  <div class="home">
    <vheader></vheader>
    <div class="swiper-wrap">
      <ul class="menu">
        <li v-for="(item, index) in menuData" :key="index">
          <a href="javascript:;">{{item.name}}</a>
        </li>
      </ul>
      <v-swiper :data="advertiseData"></v-swiper>
    </div>
    <ul class="post-wrap">
      <li class="post-item" v-for="(item, index) in postDATA" :key="index">
        <a :href="item.href">
          <img class="post-img" :src="item.imgUrl" alt="">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import vheader from '@/components/vheader.vue';
import vSwiper from '@/components/vSwiper.vue';

export default {
  name: 'home',
  data() {
    return {
      menuData: [],
      advertiseData: [],
      postDATA: [],
    };
  },
  components: {
    vheader,
    vSwiper,
  },
  created() {
    this.getMenuData();
    this.getAdvertiseData();
    this.getPostData();
  },
  methods: {
    async getMenuData() {
      const { data } = await axios.get('/api/menu');
      this.menuData = data;
    },
    async getAdvertiseData() {
      const { data } = await axios.get('/api/advertise');
      this.advertiseData = data;
    },
    async getPostData() {
      const { data } = await axios.get('/api/post');
      this.postDATA = data;
    },
  },
};
</script>

<style lang="less" scoped>
  .home{
    width: 100%;
    background-color: #f3f3f3;
  }
.swiper-wrap{
  width: 1240px;
  height: 500px;
  margin: 0 auto;
  position: relative;
  .menu{
    position: absolute;
    top: 0;
    left: 0;
    width: 303px;
    height: 100%;
    background-color: rgba(0, 0, 0, .38);
    color: #fff;
    font-size: 16px;
    padding: 17px 40px;
    box-sizing: border-box;
    z-index: 1;
    li{
      height: 57px;
      line-height: 57px;
      &:hover{
        color: #31a5e7;
      }
    }
  }
}
.post-wrap{
  width: 1240px;
  height: 180px;
  margin: 10px auto 0;
  display: flex;
  justify-content: space-between;
  .post-item{
    width: 303px;
    height: 180px;
    .post-img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>

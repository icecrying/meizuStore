<template>
  <div class="home">
    <vheader></vheader>
    <div class="main">
      <div class="swiper-wrap">
        <ul class="menu">
          <li v-for="(item, index) in menuData" :key="index" @click="gotoCategory">
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
      <div class="list-wrap">
        <div class="title">热卖商品</div>
        <goods-list :data="hotGoodsData"></goods-list>
      </div>
      <div class="list-wrap">
        <div class="title">手机</div>
        <recommend :data="phoneRecommendData"></recommend>
        <goods-list :data="phoneSaleData"></goods-list>
      </div>
      <div class="list-wrap">
        <div class="title">智能配件</div>
        <recommend :data="smartRecommendData"></recommend>
        <goods-list :data="smartSaleData"></goods-list>
      </div>
    </div>
    <div class="footer">
      <div class="footer-wrap">
        <div class="server-wrap">
          <ul class="server-list">
            <li class="server-item">
              <img src="../assets/img/sf.png" alt="">
              <span>全场顺丰包邮</span>
            </li>
            <li class="server-item">
              <img src="../assets/img/light.png" alt="">
              <span>百城速达</span>
            </li>
            <li class="server-item">
              <img src="../assets/img/back.png" alt="">
              <span>7天无理由退货</span>
            </li>
            <li class="server-item">
              <img src="../assets/img/circle.png" alt="">
              <span>15天换货保障</span>
            </li>
            <li class="server-item">
              <img src="../assets/img/maintenance.png" alt="">
              <span>1年免费保修</span>
            </li>
            <li class="server-item">
              <img src="../assets/img/location.png" alt="">
              <span>线下体验店</span>
            </li>
            <li class="server-item">
              <img src="../assets/img/computer.png" alt="">
              <span>远程支持服务</span>
            </li>
            <li class="server-item">
              <img src="../assets/img/home.png" alt="">
              <span>上门快修</span>
            </li>
          </ul>
          <div class="server-style">
            <p class="server-time">周一至周日 7:30-24:00</p>
            <p class="server-tel">400-788-3333</p>
            <p>在线客服</p>
          </div>
        </div>
        <div class="relevant-wrap">
          <div class="relevant-left">
            <ul class="relevant-list">
              <li @click="gotoTest">了解魅族</li>
              <li>加入我们</li>
              <li>联系我们</li>
              <li>Flyme</li>
              <li>魅族社区</li>
              <li>天猫旗舰店</li>
              <li>问题反馈</li>
              <li>线上销售权名单公式</li>
              <li>出版经营许可证</li>
            </ul>
            <p>©2019 Meizu Telecom Equipment Co., Ltd. All rights reserved. 粤ICP备13003602号 合字B2-20170010 营业执照 法律声明  粤公网安备 44049102496009 号</p>
          </div>
          <ul class="relevant-right">
            <li><i class="iconfont icon-weibo"></i></li>
            <li><i class="iconfont icon-weixin"></i></li>
            <li><i class="iconfont icon-qqzone"></i></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import vheader from '@/components/vheader.vue';
import vSwiper from '@/components/vSwiper.vue';
import goodsList from '@/components/goodsList.vue';
import recommend from '@/components/recommend.vue';

export default {
  name: 'home',
  data() {
    return {
      menuData: [],
      advertiseData: [],
      postDATA: [],
      hotGoodsData: [],
      phoneRecommendData: [],
      phoneSaleData: [],
      smartRecommendData: [],
      smartSaleData: []
    };
  },
  components: {
    vheader,
    vSwiper,
    goodsList,
    recommend
  },
  created() {
    this.getMenuData();
    this.getAdvertiseData();
    this.getPostData();
    this.getHotGoodsData();
    this.getPhoneRecommendData();
    this.getPhoneSaleData();
    this.getSmartRecommendData();
    this.getSmartSaleData();
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
    async getHotGoodsData() {
      const { data } = await axios.get('/api/hotSale');
      this.hotGoodsData = data;
    },
    async getPhoneRecommendData() {
      const { data } = await axios.get('/api/phoneRecommend');
      this.phoneRecommendData = data;
    },
    async getPhoneSaleData() {
      const { data } = await axios.get('/api/phoneSale');
      this.phoneSaleData = data;
    },
    async getSmartRecommendData() {
      const { data } = await axios.get('/api/smartRecommend');
      this.smartRecommendData = data;
    },
    async getSmartSaleData() {
      const { data } = await axios.get('/api/smartSale');
      this.smartSaleData = data;
    },
    gotoCategory() {
      this.$router.push({
        path: '/category'
      })
    },
    gotoTest() {
      this.$router.push({
        path: '/test'
      })
    },
  }
};
</script>

<style lang="less" scoped>
.main{
  width: 100%;
  margin: 0 auto;
  background-color: #f3f3f3;
  padding-bottom: 50px;
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
.list-wrap{
  width: 1240px;
  margin: 50px auto 0;
}
.title{
  font-size: 30px;
  line-height: 1.5;
}
.footer{
  width: 100%;
  background-color: #fff;
  .footer-wrap{
    width: 1240px;
    margin: 0 auto;
    .server-wrap{
      width: 100%;
      padding: 48px 0 20px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #eee;
      .server-list{
        width: 1000px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        .server-item{
          cursor: pointer;
          flex: 0 0 auto;
          width: 240px;
          height: 57px;
          position: relative;
          img{
            width: 30px;
            height: 29px;
          }
          span{
            position: absolute;
            top: 6px;
            left: 37px;
            font-size: 14px;
            color: #999;
          }
        }
      }
      .server-style{
        text-align: right;
        color: rbg(103, 103, 103);
        .server-time{
          font-size: 14px;
          color: #999;
        }
        .server-tel{
          color: #00c3f5;
          font-size: 30px;
          margin: 10px 0;
        }
      }
    }
    .relevant-wrap{
      width: 100%;
      padding: 28px 0 20px;
      display: flex;
      justify-content: space-between;
      .relevant-left{
        font-size: 14px;
        color: #999;
        .relevant-list{
          display: flex;
          margin-bottom: 10px;
          li{
            cursor: pointer;
            height: 20px;
            line-height: 20px;
            padding: 0 15px;
            text-align: center;
            border-right: 1px solid #eee;
            &:first-child{
              padding-left: 0;
            }
            &:last-child{
              border-right: none;
            }
          }
        }
      }
      .relevant-right{
        display: flex;
        align-items: flex-end;
        li{
          padding: 0 10px;
          border-right: 1px solid #eee;
          &:last-child{
            border-right: none;
          }
          i{
            vertical-align: middle;
            width: 16px;
            height: 16px;
            color: #999;
          }
        }
      }
    }
  }
}
</style>

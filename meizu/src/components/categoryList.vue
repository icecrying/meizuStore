<!-- 商品列表 -->
<template>
  <ul class="goods-wrap">
    <li class="goods" :style="listSize"
        v-for="(item, index) in data" :key="index">
      <a :href="item.href">
        <img class="goods-img" :src="item.colorImageUrls[nowGoods]" alt="">
      </a>
      <div class="goods-model">
        <div v-for="(info, i) in item.colorImageUrls" :key="i" class="goods-info"
           @click="changeNowGoods(i)" :class="{'active': nowGoods === i}">
          <img :src="info" alt="">
        </div>
      </div>
        <h3 class="goods-name">{{item.goodsName}}</h3>
        <p class="goods-desc">{{item.goodsDesc}}</p>
        <div class="goods-price">
          <span class="symbol">¥</span>
          <span class="price-num">{{item.goodsPrice}}</span>
          <span class="txt" v-if="item.oldPrice === null">起</span>
          <span class="oldprice" v-else>¥{{item.oldPrice}}</span>
        </div>
        <div class="new-goods" v-if="item.newProduct">新品</div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'goodsList',
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    width: {
      type: Number,
      default() {
        return 303;
      }
    },
    height: {
      type: Number,
      default() {
        return 420;
      }
    }
  },
  data() {
    return {
      nowGoods: 0
    };
  },

  components: {},

  computed: {
    listSize() {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`
      };
    }
  },

  methods: {
    changeNowGoods(i) {
      this.nowGoods = i;
    }
  }
};

</script>
<style lang='less' scoped>
  .goods-wrap{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .goods{
      margin-top: 10px;
      flex: 0 0 auto;
      background-color: #fff;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      .goods-img{
        height: 230px;
        margin: 20px auto;
      }
      .goods-model{
        height: 40px;
        margin-bottom: 15px;
        display: flex;
        justify-content: center;
        .goods-info{
          width: 40px;
          height: 40px;
          border-radius: 5px;
          border: 1px solid #cccccc;
          box-sizing: border-box;
          margin-right: 8px;
          &:last-child{
            margin-right: 0;
          }
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
      .goods-name{
        color: #333;
        font-size: 16px;
        margin-bottom: 10px;
      }
      .goods-desc{
        color: #999;
        font-size: 14px;
        margin-bottom: 10px;
      }
      .goods-price{
        font-size: 22px;
        color: #c00;
        line-height: 1;
        .symbol{
          vertical-align: top;
          font-size: 14px;
          margin-right: 2px;
        }
        .txt{
          vertical-align: bottom;
          font-size: 16px;
          margin-left: 8px;
        }
        .oldprice{
          color: rgb(82,82,82);
          font-size: 14px;
          margin-left: 10px;
          text-decoration: line-through;
        }
      }
      .new-goods{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        overflow: hidden;
        position: absolute;
        top: 30px;
        left: 30px;
        text-align: center;
        line-height: 60px;
        background-image: linear-gradient(135deg, rgb(82,137,255), rgb(106,177,242));
        color: #fff;
      }
    }
  }
</style>

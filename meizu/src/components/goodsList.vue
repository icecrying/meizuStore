<!-- 商品列表 -->
<template>
  <ul class="goods-wrap">
    <li class="goods" :style="listSize"
    v-for="(item, index) in data" :key="index">
      <a :href="item.href">
        <img class="goods-img" :src="item.goodsUrl" alt="">
        <h3 class="goods-name">{{item.goodsName}}</h3>
        <p class="goods-desc">{{item.goodsDesc}}</p>
        <div class="goods-price">
          <span class="symbol">¥</span>
          <span class="price-num">{{item.goodsPrice}}</span>
          <span class="txt" v-if="item.lower">起</span>
          <span class="oldprice" v-else>¥{{item.oldPrice}}</span>
        </div>
        <div class="new-goods" v-if="item.newProduct">新品</div>
      </a>
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
        return 400;
      }
    }
  },
  data() {
    return {
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

  methods: {}
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
        margin: 30px auto;
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

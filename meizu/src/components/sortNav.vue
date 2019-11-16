<template>
  <div class="sort-nav-wrap">
    <ul class="sort-nav">
      <li v-for="(item, index) in sortNav" :key="index"
        @click="changeIndex(index)" :class="{'active': nowNavIndex === index}">
        {{item}}
      </li>
    </ul>
    <label class="filter">
      <input type="checkbox">
      <span>仅显示有货商品</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'sortNav',
  data() {
    return {
      sortNav: ['推荐', '新品', '价格'],
      nowNavIndex: 0
    };
  },
  components: {

  },
  methods: {
    changeIndex(index) {
      this.nowNavIndex = index;
    }
  },
};
</script>

<style lang="less" scoped>
.sort-nav-wrap{
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .sort-nav{
    display: flex;
    li{
      margin-right: 50px;
      font-size: 14px;
      color: #666;
      cursor: pointer;
      transition: color .3s ease-in-out;
      &.active{
        color: #00c3f5;
      }
    }
  }
  .filter{
    cursor: pointer;
    user-select:none;
    input{
      vertical-align: middle;
    }
  }
}
</style>

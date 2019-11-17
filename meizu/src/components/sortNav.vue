<template>
  <div class="sort-nav-wrap">
    <ul class="sort-nav">
      <li
        v-for="(item, index) in sortNav"
        :key="index"
        @click="changeIndex(index)"
        :class="{'active': nowNavIndex === index}"
      >
        {{item}}
        <i
          v-if="index === 2"
          class="iconfont pirce-icon"
          :class="`${price === 'low'? 'icon-down': 'icon-up'}`"
        ></i>
      </li>
    </ul>
    <label class="filter">
      <input v-model="isSellOut" type="checkbox" />
      <span>仅显示有货商品</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "sortNav",
  data() {
    return {
      sortNav: ["推荐", "新品", "价格"],
      nowNavIndex: 0,
      price: "low",
      isSellOut: false
    };
  },
  components: {},
  watch: {
    isSellOut(val) {
      this.$emit("setStock", val)
    }
  },
  mounted() {
    // this.changeIndex(0)
  },
  methods: {
    changeIndex(index) {
      this.nowNavIndex = index;
      if (index === 0) {
        this.$emit("setSort", "recommend");
      } else if (index === 1) {
        this.$emit("setSort", "new");
      } else {
        this.price = this.price === "low" ? "high" : "low";
        this.$emit("setSort", this.price);
      }
    },
  }
};
</script>

<style lang="less" scoped>
.sort-nav-wrap {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .sort-nav {
    display: flex;
    li {
      margin-right: 50px;
      font-size: 14px;
      color: #666;
      cursor: pointer;
      transition: color 0.3s ease-in-out;
      i {
        font-size: 14px;
      }
      &.active {
        color: #00c3f5;
      }
    }
  }
  .filter {
    cursor: pointer;
    user-select: none;
    input {
      vertical-align: middle;
    }
  }
}
</style>

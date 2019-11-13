<!--  -->
<template>
  <div class="recommend-wrap" v-if="data.length > 0">
    <div class="large-left">
      <a :href="data[0].href">
        <img :src="data[0].imgUrl" alt />
      </a>
    </div>
    <div class="right">
      <div class="middle">
        <a :href="data[1].href">
          <img :src="data[1].imgUrl" alt />
        </a>
      </div>
      <div class="small-wrap">
        <div class="small">
          <a :href="data[2].href">
            <img :src="data[2].imgUrl" alt />
          </a>
        </div>
        <div class="small">
          <a :href="data[3].href">
            <img :src="data[3].imgUrl" alt />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recommend',
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {}
};
</script>
<style lang='less' scoped>
.recommend-wrap{
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: space-between;
  .large-left{
    width: 615px;
    height: 450px;
  }
  .right{
    width: 616px;
    height: 450px;
    .middle{
      width: 616px;
      height: 220px;
    }
    .small-wrap{
      width: 616px;
      height: 220px;
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      .small{
        width: 303px;
        height: 220px;
      }
    }
  }
}
img{
  width: 100%;
  height: 100%;
}
</style>

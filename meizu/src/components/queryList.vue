<!--  -->
<template>
  <div class="wrap" v-if="data.length > 0">
    <div class="options-wrap" v-for="(item, index) in data" :key="index">
      <div class="options">{{item.name}}</div>
      <ul>
        <li :class="{active: activeFilter[item.key] === info.value}"
            v-for="(info, i) in item.queryList" :key="i"
            @click="changeFilter(item.key, info.value)">
          {{info.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'queryList',
  data() {
    return {
      activeFilter: {
        brand: null,
        size: null,
        memory: null
      }
    };
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {},

  computed: {},

  methods: {
    changeFilter(key, val) {
      this.$set(this.activeFilter, key, val);
      this.$emit('setQuery', this.activeFilter);
    }
  }
};

</script>
<style lang='less' scoped>
.wrap{
  padding: 15px 10px;
  background-color: #fff;
  margin-bottom: 10px;
}
.options-wrap{
  font-size: 14px;
  display: flex;
  line-height: 1;
  padding: 15px 10px;
  color: #515151;
  .options{
    width: 80px;
    padding: 16px 10px;
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    li{
      cursor: pointer;
      margin-right: 62px;
      height: 46px;
      line-height: 46px;
      transition: color .3s ease-in-out;
      &.active{
        color: #00c3f5;
      }
    }
  }
}
</style>

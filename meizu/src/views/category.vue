<!--  -->
<template>
  <div>
    <vheader></vheader>
    <div class="main">
      <div class="main-wrap">
        <p class="nav"><span>首页</span> > <span>全部商品</span> > <span class="now-nav">手机</span></p>
        <query-list :data="queryListData"></query-list>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import vheader from '@/components/vheader.vue';
import queryList from '@/components/queryList.vue';
export default {
  name: 'category',
  data() {
    return {
      queryListData: []
    };
  },

  components: {
    vheader,
    queryList
  },

  computed: {},
  mounted() {
    this.getQueryListData();
  },
  methods: {
    async getQueryListData() {
      const { data } = await axios.get('/api/queryList');
      this.queryListData = data;
    }
  }
}

</script>
<style lang='less' scoped>
.main{
  width: 100%;
  background-color: #f3f3f3;
  padding-bottom: 50px;
  .main-wrap{
    width: 1240px;
    margin: 0 auto;
  }
}
.nav{
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  .now-nav{
    
    color: #999;
  }
}
</style>

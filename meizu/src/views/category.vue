<!--  -->
<template>
  <div>
    <vheader></vheader>
    <div class="main">
      <div class="main-wrap">
        <p class="nav"><span>首页</span> > <span>全部商品</span> > <span class="now-nav">手机</span></p>
        <query-list :data="queryListData" @query="query"></query-list>
        <sort-nav></sort-nav>
        <category-list :data="categoryListData"></category-list>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import vheader from '@/components/vheader.vue';
import queryList from '@/components/queryList.vue';
import sortNav from '@/components/sortNav.vue';
import categoryList from '@/components/categoryList.vue';

export default {
  name: 'category',
  data() {
    return {
      queryListData: [],
      categoryListData: [],
      _categoryListData: []
    };
  },

  components: {
    vheader,
    queryList,
    sortNav,
    categoryList
  },

  computed: {},
  mounted() {
    this.getQueryListData();
    this.getCategoryListData();
  },
  methods: {
    async getQueryListData() {
      const { data } = await axios.get('/api/queryList');
      this.queryListData = data;
    },
    async getCategoryListData() {
      const { data } = await axios.get('/api/categoryList');
      this.categoryListData = data;
      this._categoryListData = [...data];
    },
    query(val) {
      this.categoryListData = [...this._categoryListData]
      Object.keys(val).forEach((key) => {
        if (val[key]) {
          this.categoryListData = this.categoryListData.filter(item => item.features.indexOf(val[key]) !== -1);
        }
      });
    }
  }
};

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

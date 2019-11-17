<!--  -->
<template>
  <div>
    <vheader></vheader>
    <div class="main">
      <div class="main-wrap">
        <p class="nav"><span>首页</span> > <span>全部商品</span> > <span class="now-nav">手机</span></p>
        <query-list :data="queryListData" @setQuery="setQuery"></query-list>
        <sort-nav @setSort="setSort" @setStock="setStock"></sort-nav>
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
      _categoryListData: [],
      currentQuery: null,
      currentSort: null,
      currentStock: null
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
    sortGoods() {
      this.categoryListData = [...this._categoryListData];
      if (this.currentQuery) {
        Object.keys(this.currentQuery).forEach((key) => {
          if (this.currentQuery[key]) {
            this.categoryListData = this.categoryListData.filter(item => item.features.indexOf(this.currentQuery[key]) !== -1);
          }
        });
      }
      if (this.currentSort) {
        if (this.currentSort === 'recommend') {
          this.categoryListData.sort((a, b) => b.shelveTime - a.shelveTime)
        } else if (this.currentSort === 'new') {
          this.categoryListData.sort((a, b) => b.publishedTime - a.publishedTime)
        } else {
          this.categoryListData.sort((a, b) => {
            if (this.currentSort === 'high') {
              return b.priceForApp - a.priceForApp
            }
            return a.priceForApp - b.priceForApp
          })
        }
      }
      if (this.currentStock) {
        this.categoryListData = this.categoryListData.filter(item => item.available)
      }
    },
    setQuery(val) {
      this.currentQuery = val;
      this.sortGoods();
    },
    setSort(val) {
      this.currentSort = val;
      this.sortGoods();
    },
    setStock(val) {
      this.currentStock = val;
      this.sortGoods();
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

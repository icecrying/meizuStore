<template>
  <div class="header-container">
    <div class="header">
      <div class="header-logo" @click="backHome">
        <img src="../assets/img/logo.png" alt="">
      </div>
      <div class="header-nav">
        <ul>
          <li v-for="(item, index) in navData" :key="index"
              @mouseenter="showNavDrop(item)"
            >
            <a href="javascript:;">{{item.name}}</a>
          </li>
        </ul>
        <div class="input-search">
          <input type="text" placeholder="购物车">
          <i class="iconfont icon-search"></i>
        </div>
        <div class="icon">
          <i class="iconfont icon-user"></i>
        </div>
        <div class="icon">
          <i class="iconfont icon-cart"></i>
        </div>
      </div>
    </div>
    <transition name="nav">
      <div class="nav-drop" v-if="showNav" @mouseleave="closeNavDrop">
        <div class="nav-children" >
         <transition-group tag="ul" @enter="enter">
          <li v-for="(item, index) in navDropItemData" :key="index+1"
          :data-index="index">
            <a href="javascript:;">
              <img :src=item.pic alt="">
              <p class="goodsname" :title=item.name>{{item.name}}</p>
              <p>{{item.price}}</p>
            </a>
          </li>
         </transition-group>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from 'axios';
// import Velocity from 'velocity-animate';

export default {
  name: 'vheader',
  data() {
    return {
      navData: [],
      navDropItemData: [],
      showNav: false,
    };
  },
  components: {
  },
  created() {
    this.getNavData();
  },
  methods: {
    async getNavData() {
      const { data } = await axios.get('/api/nav');
      this.navData = data;
    },
    showNavDrop(item) {
      this.navDropItemData = item.children;
      this.showNav = true;
    },
    closeNavDrop() {
      this.showNav = false;
    },
    enter(el, done) {
      // 获取自定义属性
      // console.log(el);
      // const timeOut = el.dataset.index * 150;
      // setTimeout(() => {
      //   Velocity(el, {
      //     opacity: 1,
      //     translateX: '-5px',
      //   });
      // }, timeOut);
      done();
    },
    backHome() {
      this.$router.push({
        path: '/',
      })
    }
  },
};
</script>

<style lang='less' scoped>
.header-container{
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.header{
  width: 1240px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .header-logo{
    cursor: pointer;
    width: 140px;
    height: 26px;
    img{
      width: 140px;
      height: 26px;
    }
  }

  .header-nav{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    li{
      display: inline-block;
      font-size: 16px;
      color: #515151;
      padding: 32px 20px;
      cursor: pointer;

      &:hover{
        color: #31a5e7;
      }
    }

    .input-search{
      width: 170px;
      height: 30px;
      padding: 0 10px;
      margin: 0 0 0 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 12px;
      color: #ccc;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      input{
        border: none;
        overflow: hidden;
      }

      .icon-search{
        font-size: 12px;
      }
    }

    .icon{
      margin: 0 10px 0 20px;
      padding: 10px 0;

      i{
        font-size: 16px;
      }
    }
  }
}
.nav-drop{
  position: absolute;
  top: 80px;
  width: 100%;
  height: 145px;
  overflow: hidden;
  background-color: #fff;
  z-index: 9;

  .nav-children{
    width: 1240px;
    height: 145px;
    margin: 0 auto;
    ul{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    li{
      /*opacity: 0;*/
      width: 136px;
      height: 145px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      img{
        height: 100px;
      }
      .goodsname{
        width: 136px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }
}

.nav-enter-active{
  height: 156px;
  transition: height .3s ease-in-out;
}
.nav-enter{
  height: 0;
}
</style>

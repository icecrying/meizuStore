<template>
  <div>
    <div class="wrap">
      <div v-for="(item, index) in arr" :key="index">
        <h2>第{{index}}行： {{item.child[active]}}</h2>
        <span
          :class="{'active': i === active}"
          v-for="(info, i) in item.child"
          :key="i"
          @click="change(i)"
        >{{info}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          child: ['a', 'b', 'c']
        },
        {
          child: ['a', 'b', 'c', 'd']
        },
        {
          child: ['a', 'b', 'c', 'd', 'e']
        },
        {
          child: ['a', 'b']
        }
      ],
      active: 0
    };
  },
  methods: {
    change(i) {
      this.active = i;
    }
  }
};
</script>

<style lang="less" scoped>
.wrap{
  width: 500px;
  margin: 30px auto;
}
span {
  margin-right: 10px;
}
.active {
  color: aqua;
}
</style>

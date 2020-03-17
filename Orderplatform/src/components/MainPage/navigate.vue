<template>
  <div class="navigate">
    <div class="navigate__fix">
      <div class="navigate__fix__main" v-for="item of gadget" :key="item.id" @click="moreEvent(item.eventIndex)">
        <i :class="`iconfont ` + item.gadclass"></i>
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navigate",
  data() {
    return {
      gadget: [
          { id: "1", gadclass: "icon-zhuye", name:'主页',eventIndex:'homePage'},
          { id: "2", gadclass: "icon-tubiaolunkuo-", name:'商品',eventIndex:'carPage'},
          { id: "3", gadclass: "icon-icon-test", name:'我的',eventIndex:'myPage'}
      ],
    };
  },
  methods:{
    moreEvent(val){
      this[val]()
    },
    homePage(){
      this.$emit('routePage',1)
    },
    carPage(){
      this.$emit('routePage',2)
    },
    myPage(){
      this.$emit('routePage',3)
    }
  }
};
</script>
<style lang='scss' scoped>
.navigate {
  position: fixed;
  bottom: 4%;
  width: 90%;
  height: 60px;
  background-color: #fff;
  border-radius: 8px 8px 8px 8px;
  margin-left: 5%;

  &__fix {
    width:100%;
    &__main {
      width:33%;
      float:left;
      box-sizing: border-box;
      padding:14px 0 0 0;
      i {
        font-size: 16px;
        display: block;
        text-align: center;
      }
      span {
        font-size: 12px;
        text-align: center;
        line-height: 28px;
        display: block;
      }
    }
  }
}
</style>
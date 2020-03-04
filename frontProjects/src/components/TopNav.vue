<template>
  <van-nav-bar
    :title="headerTitle"
    border
    @click-left="onClickLeft"
    @click-right="onClickRight"
    fixed
  >
   <van-image width="2rem"
  height="2rem" :src="require('../assets/img/logo.jpg')" slot="left"/>
  <van-icon  name="user-circle-o" slot="right" color="black" />
  </van-nav-bar>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState({
      headerTitle:"headerTitle"
  }),
  methods: {
    onClickLeft() {
      alert("返回");
    },
    onClickRight() {
      alert("按钮");
    },
  }
};
</script>
<style lang="scss" scoped>
.van-icon {
  font-size: 24px;
}
.van-nav-bar__left{
  bottom: -11px;
}
</style>
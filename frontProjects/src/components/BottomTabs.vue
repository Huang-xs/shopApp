<template>
  <van-tabbar v-model="newActive" active-color="#1989fa">
    <van-tabbar-item icon="home-o">首页</van-tabbar-item>
    <!-- dot 点 -->
    <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
    <!-- info="5" 提示数量 -->
    <van-tabbar-item icon="shopping-cart-o" :info="shopcartPro.length==0?'':shopcartPro.length">购物车</van-tabbar-item>
    <van-tabbar-item icon="manager-o">个人中心</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { mapState } from "vuex";
import * as Types from "../store/mutation-type"
import store from "../store";

export default {
  name: "BottomTabs",
  data() {
    return {
      routerN: ["home", "classify", "shopcart", "mine"]
    };
  },
  computed: {
    newActive: {
      get() {
        return this.$store.state.active;
      },
      set(val) {
        store.commit(Types.CHANGE_NAV_TITLE, { N: this.routerN[val], At: val });

        this.$router.push({
        name: this.routerN[val],
        query: { active: val}
      });
      }
    },
    ...mapState(["shopcartPro"])
  },
  methods: {},
  mounted() {
    if (this.$router.currentRoute.name == "home") {
      return;
    } else {
      this.$router.push({
        name: this.routerN[this.$store.state.active],
        query: { active: this.$store.state.active }
      });
      
    }
  }
};
</script>


<style lang="scss">
.van-tabbar {
  background-color: #effbfc;
  .van-info{
    z-index: 20 !important;
  }
}
</style>
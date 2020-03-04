<template>
  <div id="app">
    <Degital></Degital>
    <div v-if="!isDegital">
      <!-- 头部 -->
      <TopNav></TopNav>
      <keep-alive>
        <router-view />
      </keep-alive>
      <!-- 底部导航 -->
      <BottomTabs></BottomTabs>
    </div>
  </div>
</template>
<script>

import TopNav from "./components/TopNav";
import BottomTabs from "./components/BottomTabs";
import Degital from "./components/ProductDegital";
import {mapState} from "vuex";
export default {
  name: "app",
  components: {
    TopNav,
    BottomTabs,
    Degital
  },
  computed:mapState(["isDegital"])
};
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

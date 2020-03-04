<template>
  <div class="classify">
    <van-tree-select height="90vh" :items="items" :main-active-index.sync="activeIndex">
      <template slot="content">
        <div v-if="activeIndex === 0">
          <van-card
            v-for="(value,index) in productList"
            :key="index"
            v-show="value.isNote"
            :price="value.nowPrice.replace(/[^0-9]/ig,'')+'.00'"
            :title="value.title"
            :thumb="value.image"
            :tag="value.isSeckill?'秒杀':''"
            @click="showDegital(value)"
          >
            <div slot="tags" v-show="value.isGift">
              <van-tag plain type="danger">赠品</van-tag>
            </div>
          </van-card>
        </div>
        <div v-if="activeIndex === 1">
          <van-card
            v-for="(value,index) in productList"
            :key="index"
            v-show="value.isTai"
            :price="value.nowPrice.replace(/[^0-9]/ig,'')+'.00'"
            :title="value.title"
            :thumb="value.image"
            @click="showDegital(value)"
          />
        </div>
        <div v-if="activeIndex === 2">
          <van-card
            v-for="(value,index) in productList"
            :key="index"
            v-show="value.isParts"
            :price="value.nowPrice.replace(/[^0-9]/ig,'')+'.00'"
            :title="value.title"
            :thumb="value.image"
            @click="showDegital(value)"
          />
        </div>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
import * as Types from "../store/mutation-type";
import store from "../store";
import { mapState } from "vuex";
export default {
  name: "classify",
  data() {
    return {
      activeIndex: 0,
      items: [{ text: "笔记本" }, { text: "台式" }, { text: "配件" }]
    };
  },
  computed: mapState(["productList"]),
  methods: {
    showDegital(proDegital) {
      store.commit(Types.CHANGE_DEGITAL_PRO, {
        isShow: true,
        data: proDegital
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.classify {
  margin: 46px 0 50px;
  .van-card:not(:last-child) {
    margin-top: 0px;
    margin-bottom: 8px;
  }
  .van-sidebar {
    border-right: 2px solid #fff;
  }
}
</style>

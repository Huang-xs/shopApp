<template>
  <transition name="showAnimate">
    <div class="degital" v-if="isDegital">
      <div class="degital-content">
        <van-nav-bar left-arrow @click-left="onClickLeft" :fixed="true">
          <van-notice-bar :text="degitalData.title" slot="title" background="#FFFFFF" color="#000" />
        </van-nav-bar>
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in degitalData.degital.degBanner" :key="index">
            <img v-lazy="image" width="100%" />
          </van-swipe-item>
        </van-swipe>
        <van-goods-action>
          <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
          <van-goods-action-icon icon="cart-o" text="购物车" @click="comeToCart"/>
          <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
          <van-goods-action-button type="warning" text="加入购物车" @click="addPro(degitalData)"/>
          <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
        <van-cell title="现价：" :value="degitalData.nowPrice" size="large" />
        <van-cell :title="degitalData.title" size="large" :label="degitalData.descrition" />

        <van-collapse v-model="activeNames">
          <van-collapse-item name="1" :value="stages[radio]">
            <div slot="title">分期</div>

            <van-radio-group v-model="radio">
              <van-cell-group>
                <van-cell
                  v-for="(value,index) in stages"
                  :key="index"
                  :title="value"
                  clickable
                  @click="changeRadio(index)"
                >
                  <van-radio slot="right-icon" :name="index" />
                </van-cell>
              </van-cell-group>
            </van-radio-group>
          </van-collapse-item>
          <van-collapse-item title="产品参数" name="2" icon="shop-o" value="默认配置">{{degitalData.descrition}}</van-collapse-item>
        </van-collapse>

        <van-image
          v-for="(value,index) in degitalData.degital.degImg"
          :key="index"
          :src="value"
          fit="fill"
        />
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from "vuex";
import store from "../store";
import * as Types from "../store/mutation-type";
export default {
  name: "ProductDegital",
  data() {
    return {
      activeNames: [],
      radio: 0,
      stages: ["花呗分期", "银行分期"]
    };
  },
  computed: mapState(["isDegital", "degitalData"]),
  methods: {
    onClickLeft() {
      store.commit(Types.CHANGE_DEGITAL_PRO, { isShow: false, data: {} });
    },
    changeRadio(index) {
      this.radio = index;
      this.activeNames = [];
    },
    comeToCart(){
      this.$router.push({name:"shopcart",query:{active:2}});
      store.commit(Types.CHANGE_DEGITAL_PRO, { isShow: false, data: {} });
    },
    addPro(data) {
      this.$toast.success("已加入购物车!");
      data = { ...data,  defaultNum: 1 };
      store.commit(Types.ADD_SHOPCART_PRO, data);
    },
  }
};
</script>

<style lang="scss" scoped>
.degital {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: aliceblue;
  .degital-content {
    margin: 46px 0 58px;
    overflow: auto;
  }
  .van-goods-action {
    z-index: 20;
  }
}
.showAnimate-enter-active, .showAnimate-leave-active {
  opacity: 1;
}
.showAnimate-enter-active, .showAnimate-leave-active {
  transition: .5s linear;
}
.showAnimate-enter, .showAnimate-leave-to  {
  opacity: 0;
}
</style>
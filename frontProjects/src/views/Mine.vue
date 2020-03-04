<template>
  <div class="mine">
    <div class="mine-header">
      <div class="header-img">
        <van-image
          src="https://i.app.lefile.cn/head/picdefault1477549252749/sdefault1477549252749.png?t=1477549253696"
        />
      </div>
      <div class="user">用户名</div>
    </div>

    <van-cell value="查看更多订单" is-link icon="orders-o">
      <template slot="title">
        <span class="custom-title">所有订单</span>
      </template>
    </van-cell>

    <van-grid :column-num="5">
      <van-grid-item icon="pending-payment" text="待付款" :info="waitPay.length" />
      <van-grid-item icon="shop-collect-o" text="待发货" :info="alreadyPayPro.length" />
      <van-grid-item icon="logistics" text="待收货" info="0" />
      <van-grid-item icon="comment-circle-o" text="待评价" info="0" />
      <van-grid-item icon="after-sale" text="退/换货" />
    </van-grid>

    <van-cell  is-link >
      <template slot="title" >
        <span class="custom-title" >个人信息</span>
      </template>
    </van-cell>
    <van-cell  is-link value="1">
      <template slot="title">
        <span class="custom-title">我的收藏</span>
      </template>
    </van-cell>
    <van-cell  is-link >
      <template slot="title">
        <span class="custom-title">收货地址</span>
      </template>
    </van-cell>
    <van-cell  is-link >
      <template slot="title">
        <span class="custom-title">关于我们</span>
      </template>
    </van-cell>
    <van-cell  is-link >
      <template slot="title">
        <span class="custom-title">设置</span>
      </template>
    </van-cell>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "mine",
  data() {
    return {
      visible: false
    };
  },
  methods: {},
  computed:mapState(["waitPay","alreadyPayPro"])
};
</script>
<style lang="scss" scoped>
.mine {
  margin-top: 46px;
  .mine-header {
    display: flex;
    width: 100%;
    height: 160px;
    background: url("https://m4.lefile.cn/memberstaticinc/static/images/my-bg-new.png");
    flex-direction: column;
    .header-img {
      width: 100px;
      height: 100px;
      margin: 0 auto;
    }
    .user {
      text-align: center;
      font-size: 20px;
      color: #fff;
    }
  }
  .van-nav-bar__text {
    color: #000;
  }
}
</style>

<template>
  <div class="shopCar">
    <div class="shopCart">
      <van-nav-bar
        title="购物车"
        :right-text="shopcartPro.length == 0?'':!isEdit?'编辑':'删除'"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        :fixed="true"
      />
      <div v-show="shopcartPro.length == 0" class="tip">您的购物车空空，快去逛逛吧~~</div>
      <van-checkbox-group v-model="result" ref="checkboxGroup" @change="checkGroup(result)">
        <van-card
          v-for="(val,index) in shopcartPro"
          :key="index"
          v-show="shopcartPro.length != 0"
          :num="val.defaultNum"
          :price="val.nowPrice.replace(/[^0-9]/ig,'')+'.00'"
          desc="所选规格："
          :title="val.title"
          :thumb="val.image"
        >
          <div slot="tags">
            <van-tag plain type="success">标签</van-tag>
            <van-tag plain type="success">标签</van-tag>
            <van-tag plain type="success">标签</van-tag>
            <van-tag plain type="success">标签</van-tag>
          </div>
          <div slot="footer">
            <van-stepper
              @plus="addCount(index)"
              @minus="decCount(index)"
              input-width="40px"
              button-size="32px"
              :disable-input="true"
            />
            <van-checkbox v-show="isEdit" :name="index">是否删除</van-checkbox>
          </div>
        </van-card>
      </van-checkbox-group>
      <van-submit-bar
        v-show="shopcartPro.length != 0"
        :price="allPrice"
        button-text="提交订单"
        @submit="submitOrder()"
      >
        <van-checkbox v-show="isEdit" v-model="checked" @change="checkAll(checked)">全选</van-checkbox>
      </van-submit-bar>
      <van-popup
        v-model="show"
        close-icon-position="top-right"
        closeable
        position="bottom"
        :style="{ height: '20%' }"
      >
        <van-panel title="您需支付：" :status="'￥'+ allPrice" style="margin-top:45px;">
          <div slot="footer">
            <van-button size="small" type="danger" @click="closepopup">结算</van-button>
          </div>
        </van-panel>
      </van-popup>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import * as Types from "../store/mutation-type";
import store from "../store";

export default {
  name: "shopCart",
  data() {
    return {
      checked: false,
      isEdit: false,
      show: false,
      result: []
    };
  },
  computed: {
    ...mapState(["shopcartPro", "allPrice"])
  },
  watch: {
    shopcartPro(newVal) {
      let newPrice = 0;
      newVal.forEach(element => {
        newPrice +=
          Number(element.nowPrice.replace(/[^0-9]/gi, "")) *
          Number(element.defaultNum) *
          100;
      });
      store.commit(Types.CHANGE_ALL_PRICE, newPrice);
    }
  },
  mounted() {
    let newPrice = 0;
    this.shopcartPro.forEach(element => {
      newPrice +=
        Number(element.nowPrice.replace(/[^0-9]/gi, "")) *
        element.defaultNum *
        100;
    });
    store.commit(Types.CHANGE_ALL_PRICE, newPrice);
  },
  methods: {
    onClickLeft() {
      //  能返回，但会出现底部导航栏的激活状态不正确，即返回后不能保持上一次所获取的路由
      // 解决：将active放到vux中，通过路由的跳转方法push和computed配合来改变
      this.$router.go(-1);
      this.result = [];
      this.isEdit = false;
    },
    onClickRight() {
      // 改变值：this.$set(this.isEdit,true)

      if (!this.isEdit) {
        this.isEdit = true;
      } else {
        store.commit(Types.DELETE_SHOPCART_PRO, this.result);
        this.result = [];
        this.isEdit = false;
      }
    },
    checkGroup() {
      if (this.result.length == this.shopcartPro.length) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    },
    submitOrder() {
      this.show = true;
      store.commit(Types.SUBMIT_PRO_PAY);
    },
    closepopup(){
      this.show = false;
      store.commit(Types.CLEAR_PRO_PAY)
    },
    addCount(index) {
      store.commit(Types.CHANGE_ADD_NUM, index);
    },
    decCount(index) {
      store.commit(Types.CHANGE_DEC_NUM, index);
    },
    checkAll(state) {
      this.$refs.checkboxGroup.toggleAll(state);
    }
  }
};
</script>
<style lang="scss" scoped>
.shopCar {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 20;
  background-color: #fff;
  .shopCart {
    margin: 46px 0 50px;
  }
  .tip {
    text-align: center;
    font-size: 20px;
  }
}
</style>

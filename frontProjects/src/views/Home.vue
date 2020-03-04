<template>
  <div class="home">
    <div v-show="!isDegital">
      <van-swipe :autoplay="3000" :height="176">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" class="auto-img" />
        </van-swipe-item>
      </van-swipe>

      <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round">
        <div slot="action">搜索</div>
      </van-search>

      <!-- <van-grid :column-num="2" :gutter="10" :clickable="true" >
        <van-grid-item v-for="(value,index) in gridText" :key="index" @click="otherFun(index)">
          <van-icon :name="value.icon" :color="value.color" size="30px"  />
          {{value.text}}
        </van-grid-item>
      </van-grid> -->

      <div class="title">
        <div class="item">电脑</div>
        <div class="item bannerArea">
          <ul class="Vbanner">
            <transition-group name="scroll">
              <li
                v-for="(value,index) in computedAd"
                class="listItem"
                :key="value"
                v-show="index === currentIndex"
              >
                <van-icon name="chat-o" />
                {{value}}
              </li>
            </transition-group>
          </ul>
        </div>
      </div>

      <van-card
        v-for="(value,index) in productList"
        :key="index"
        :tag="value.isSeckill?'秒杀':''"
        :title="value.title"
      >
        <div slot="thumb" @click="showDegital(value)">
          <van-image :src="value.image" />
        </div>
        <div slot="desc" @click="showDegital(value)" class="desc">{{value.descrition}}</div>
        <div slot="price" style="font-size:17px;" @click="showDegital(value)">{{value.nowPrice}}.00</div>
        <div slot="tags" v-show="value.isGift">
          <van-tag plain type="danger">赠品</van-tag>
        </div>
        <div slot="num">已售{{value.stockNum}}</div>
        <div slot="footer">
          <div
            style="float:left;margin-top:14px"
          >{{value.praiseNum}}&nbsp;&nbsp;&nbsp;&nbsp;{{value.Proportion}}</div>
          <van-button size="small" round type="info" @click="addPro(value,index)">加入购物车</van-button>
        </div>
      </van-card>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import * as Types from "../store/mutation-type";
import store from "../store";

export default {
  name: "home",
  data() {
    return {
      images: [],
      gridText: [
        // { text: "社区", icon: "chat", color: "#1989fa" },
        // { text: "服务", icon: "manager", color: "#62BF67" },
        // { text: "技术支持", icon: "column", color: "#3FA7DE" },
        // { text: "购买指南", icon: "youzan-shield", color: "#FFC020" }
      ],
      value: "",
      computedAd: [
        "品牌电脑，学生价格，专业服务，送您成sas功!",
        "一元钱电脑带回家!电脑款式任你选!",
        "相信自己的感觉，该出手是就出手!",
        "有Dell，是给自己的生活受鼓舞!",
        "元旦让你足不出户游遍世界!"
      ],
      currentIndex: 0
    };
  },
  computed: mapState(["productList", "isDegital"]),
  methods: {
    addPro(data, index) {
      this.$toast.success("已加入购物车!");
      data = { ...data, currentAddIndex: index, defaultNum: 1 };
      store.commit(Types.ADD_SHOPCART_PRO, data);
    },
    showDegital(proDegital) {
      store.commit(Types.CHANGE_DEGITAL_PRO, {
        isShow: true,
        data: proDegital
      });
    },
    // otherFun(index){
    //   console.log(index);

    // }
  },
  watch: {
    images(newVal) {
      if (newVal.length) {
        clearInterval(this.timer);
        // this.$nextTick(function(){}):数据更新完毕并且页面更新完毕
        this.$nextTick(() => {
          this.timer = setInterval(() => {
            this.currentIndex++;
            if (this.currentIndex >= this.computedAd.length) {
              this.currentIndex = 0;
            }
          }, 1000);
        });
      }
    }
  },
  mounted() {
    // 轮播图
    this.axios("/api/getData?d=bannerImg", {
      method: "get"
    }).then(res => {
      let getImg = res.data.result.result;
      getImg.forEach(element => {
        this.images.push(element.image[0]);
      });
    });

    //产品数据
    this.axios("/api/getData?d=productList&limit=60", {
      method: "get"
    }).then(res => {
      let productData = res.data.result.result;
      store.commit(Types.GET_PRODUCT_DATA, productData);
    });
  }
};
</script>
<style lang="scss" scoped>
.home {
  margin: 46px 0 50px;
  height: calc(100% - 46px - 50px);
  overflow: hidden;
}
.auto-img {
  width: 100%;
}
.van-grid-item {
  z-index: 0 !important;
}
.desc {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.van-tabbar{
  z-index: -10 !important;
}
.title {
  display: -webkit-flex;
  text-align: left;
  margin: 0 10px;
  .item {
    flex: 1;
    // margin: 10px 0 5px;
    font-size: 15px;
  }
  .bannerArea {
    flex-grow: 6;
  }
  .Vbanner {
    position: relative;
    height: 20px;
    overflow: hidden;
  }
  .listItem {
    position: absolute;
    width: 285px;
    left: 0;
    top: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .scroll-enter {
    transform: translateY(22px);
  }
  .scroll-enter-active,
  .scroll-leave-active {
    transition: all 0.5s linear;
  }

  .scroll-enter-to,
  .scroll-leave {
    transform: translateY(0);
  }

  .scroll-leave-to {
    transform: translateY(-20px);
  }
}
th {
  height: 40px;
  line-height: 40px;
  text-align: left;
  padding: 5px 16px;
}
</style>

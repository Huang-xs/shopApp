import * as Types from "./mutation-type";

export default {
    [Types.CHANGE_NAV_TITLE](state, change) {
        state.headerTitle = state.routeContent[change.N]
        state.active = Number(change.At)
    },
    [Types.GET_PRODUCT_DATA](state, data) {
        data.forEach(element => {
            state.productList.push(element)
        })
    },
    [Types.ADD_SHOPCART_PRO](state, product) {
        state.shopcartPro.push(product)
    },
    [Types.CHANGE_ADD_NUM](state, index) {
        let price = 0;
        state.shopcartPro[index].defaultNum += 1;
        state.shopcartPro.forEach(element => {
            price += Number(element.nowPrice.replace(/[^0-9]/gi, "")) * element.defaultNum * 100;
        });
        state.allPrice = price;
    },
    [Types.CHANGE_DEC_NUM](state, index) {
        let price = 0;
        state.shopcartPro[index].defaultNum -= 1;
        state.shopcartPro.forEach(element => {
            price += Number(element.nowPrice.replace(/[^0-9]/gi, "")) * element.defaultNum * 100;
        });
        state.allPrice = price;
    },
    [Types.CHANGE_ALL_PRICE](state, price) {
        state.allPrice = price;
    },
    [Types.DELETE_SHOPCART_PRO](state, proIndex) {
        for (let i = 0; i < proIndex.length; i++) {
            state.shopcartPro.splice(proIndex[i], 1);
        }

    },
    [Types.CHANGE_DEGITAL_PRO](state, obj) {
        state.isDegital = obj.isShow;
        state.degitalData = obj.data;
    },
    [Types.SUBMIT_PRO_PAY](state) {
        state.waitPay = state.shopcartPro;
    },
    [Types.CLEAR_PRO_PAY](state) {
        state.alreadyPayPro = state.waitPay;
        state.waitPay = [];
        state.shopcartPro = [];
    }
}
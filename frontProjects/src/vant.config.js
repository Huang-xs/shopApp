import { Tabbar, TabbarItem, NavBar, Icon, Swipe, SwipeItem, Lazyload, Grid, GridItem, Image, IndexBar, IndexAnchor, Search, Card, Button, Tag, TreeSelect, SubmitBar, Checkbox, CheckboxGroup, Stepper, Cell, CellGroup, NoticeBar, GoodsAction, GoodsActionIcon, GoodsActionButton, Collapse, CollapseItem, Toast, RadioGroup, Radio, Popup, Panel } from 'vant';

let assemblyArr = [Tabbar, TabbarItem, NavBar, Icon, Swipe, SwipeItem, Lazyload, Grid, GridItem, Image, IndexBar, IndexAnchor, Search, Card, Button, Tag, TreeSelect, SubmitBar, Checkbox, CheckboxGroup, Stepper, Cell, CellGroup, NoticeBar, GoodsAction, GoodsActionIcon, GoodsActionButton, Collapse, CollapseItem, Toast, RadioGroup, Radio, Popup, Panel];

export default {
    install(Vue) {
        assemblyArr.forEach(component => {
            // Vue.component(component.name, component) // 某些组件使用该方法无法完全注册
            Vue.use(component);
        })
    }
}
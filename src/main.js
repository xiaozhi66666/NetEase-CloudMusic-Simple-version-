import Vue from "vue";
import App from "./App.vue";
// 引入重置样式文件(初始化样式)
import "@/assets/styles/reset.css";
import "@/assets/mobile/flexible.js";
import router from "@/router";
// 按需引入vant组件
import {
    NavBar,
    Tabbar,
    TabbarItem,
    Cell,
    Grid,
    GridItem,
    Icon,
    Image as VanImage,
    Col,
    Row,
    Search,
    Tag,
    List,
} from "vant";
Vue.use(List);
Vue.use(Tag);
Vue.use(Search);
Vue.use(Col);
Vue.use(Row);
Vue.use(VanImage);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Cell);
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
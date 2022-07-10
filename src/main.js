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
    Image as VanImage,
} from "vant";
import { getRecommendListAPI } from "@/api";
// console.log(getRecommendListAPI());
async function fn() {
    try {
        const res = await getRecommendListAPI();
        console.log(res);
    } catch (error) {
        console.log("错了");
    }
}
fn();
Vue.use(VanImage);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Cell);
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
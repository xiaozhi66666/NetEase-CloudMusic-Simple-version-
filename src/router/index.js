import Vue from "vue";
import VueRouter from "vue-router";
// import Play from "@/views/Play";
Vue.use(VueRouter);

const routes = [{
        // 配置重定向，首次进入页面访问的是根路径 / ==>  强制跳转 => /layout/home
        path: "/",
        redirect: "/layout/home",
    },
    {
        path: "/layout",
        // name: "layout",
        component: () =>
            import ("@/views/layout"),

        children: [{
                path: "home",
                component: () =>
                    import ("@/views/Home"),
                meta: {
                    title: "home",
                },
            },
            {
                path: "search",
                component: () =>
                    import ("@/views/Search"),
                meta: {
                    title: "search",
                },
            },
        ],
    },
];

const router = new VueRouter({
    routes,
});

export default router;
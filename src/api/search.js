import request from "@/utils/request";
// 封装search页面要用到的请求方法
//=====搜索=====热搜列表(简略)请求====
export const getHotList = (params) =>
    request({
        url: "/search/hot",
        params,
    });
//=====搜索=====热搜列表(简略)请求====
export const getSearchList = (params) =>
    request({
        url: "/cloudsearch",
        params,
    });
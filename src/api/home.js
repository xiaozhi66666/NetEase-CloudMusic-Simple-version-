import request from "@/utils/request";
// 导出====请求推荐歌单数据
export const getRecommendList = (params) =>
    request({
        url: "/personalized",
        params,
        //接收将来外面可能传进来的params的值（例如限制条数的limit：20） 参数
    });
// 导出====请求推荐歌单数据
export const getNewList = (params) =>
    request({
        url: "/personalized/newsong",
        params,
        //接收将来外面可能传进来的params的值（例如限制条数的limit：20） 参数
    });
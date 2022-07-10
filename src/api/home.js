import request from "@/utils/request";

export const getRecommendList = (params) =>
    request({
        url: "/personalized",
        params,
        //接收将来外面可能传进来的params的值（例如限制条数的limit：20） 参数
    });
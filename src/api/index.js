// 导入请求推荐歌单的方法
import { getRecommendList } from "@/api/home";
// 对导进来的请求方法进行再一次的封装并进行导出
// 导出  ====首页====推荐歌单API====
export const getRecommendListAPI = getRecommendList;
// 导入请求推荐歌单的方法
import { getRecommendList, getNewList } from "@/api/home";
import { getHotList, getSearchList } from "@/api/search";
// 对导进来的请求方法进行再一次的封装并进行导出
// 导出  ====首页====推荐歌单API====
export const getRecommendListAPI = getRecommendList;
// 导出  ====首页====最新歌单API====
export const getNewListAPI = getNewList;
// 导出  ====首页====搜索hot歌单API====
export const getHotListAPI = getHotList;
// 导出  ====首页====搜索结果API====
export const getSearchListAPI = getSearchList;
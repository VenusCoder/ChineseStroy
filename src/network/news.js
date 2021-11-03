import request from './index'


//获取新闻列表数据

export function getNews(id) {
    return request({
        url:'/news',
       params: {
           id
       }
       
    })
}

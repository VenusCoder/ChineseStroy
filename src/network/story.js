import request from './index'


//获取古诗词数据

export function getStory() {
    return request({
        url:'/story'
    })
}


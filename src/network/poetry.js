import request from './index'

//获取古诗词bannersub
export function getbannersub() {
    return request({
        url:'/bannersub'
    })
}

//获取古诗词数据

export function getPoetry() {
    return request({
        url:'/poetry'
    })
}


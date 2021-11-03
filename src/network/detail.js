import request from './index'



//获取古诗词数据

export function getDetail(id) {
    return request({
        url:'/detail',
        params:{
            id
        }
    })
}


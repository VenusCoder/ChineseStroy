import request from './index'

//获取古诗词bannersub
// export function getbannersub() {
//     return request({
//         url:'/bannersub'
//     })
// }

//获取古诗词数据

export function getCenter(type, page) {
    return request({
        url:'/center',
        params: {
            type,
            page,
        }
       
    })
}


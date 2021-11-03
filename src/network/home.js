import request from './index'

// export function getBanner() {
//     return request({
//         url:'/user'
//     })
// }

export function getNavs() {
    return request({
        url:'/nav'
    })
}

//获取banner

export function getBanner() {
    return request({
        url:'/banner'
    })
}
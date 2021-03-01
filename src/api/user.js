import request from "@/utils/request";

export function findUser(data) {
    return request({
        url: '/user/findUser',
        method: 'get',
        params: data
    })
}

export function updateUser(data) {
    return request({
        url: '/user/modify',
        method: 'post',
        data
    })
}

import request from "@/utils/request";

export function getIndexArticle(data) {
    return request({
        url: '/article/index',
        method: 'get',
        params: data
    })
}

export function uploadImage(data) {
    return request({
        url: '/article/upload',
        method: 'post',
        data
    })
}

export function newArticle(data) {
    return request({
        url: '/article/new',
        method: 'post',
        data
    })
}

export function searchByKeyword(data) {
    return request({
        url: '/article/searchByKeyword',
        method: 'post',
        data
    })
}

export function getUserArticle(data) {
    return request({
        url: '/article/user',
        method: 'get',
        params: data
    })
}

export function getArticle(data) {
    return request({
        url: '/article/getArticle',
        method: 'get',
        params: data
    })
}

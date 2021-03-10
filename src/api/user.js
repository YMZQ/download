import api from './index'
// axios
import request from '@/utils/request'
import qs from 'qs'

// 下载页
export function getAppVersion(params) {
  return request({
    url: api.getAppVersion,
    method: 'get',
      params
  })
}
// 注册
export function register(data) {
  return request({
    url: api.register,
    method: 'post',
    data
  })
}
// 短信
export function doSmsCode(data) {
  return request({
    url: api.doSmsCode,
    method: 'post',
      data
  })
}

import api from './index'
// axios
import request from '@/utils/request'

// 下载页
export function getAppVersion(params) {
  return request({
    url: api.getAppVersion,
    method: 'get',
      params
  })
}
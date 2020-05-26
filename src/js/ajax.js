import axios from 'axios'

import EnvConfig from './../config'

axios.defaults.baseURL = EnvConfig.BASE_URL

axios.interceptors.request.use((config) => {
  // const token = token || ''

  // if (EnvConfig.APP_ENV !== 'mock') {
  //   config.headers['X-TOKEN'] = token
  // }
  config.headers['X-TOKEN'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJOYW1lIjoiemhhbmdzYW4iLCJwYXNzd29yZCI6ImFiYyIsInNleCI6MSwiaWF0IjoxNTkwMzk5MDE5LCJleHAiOjE1OTA0MDYyMTl9.m98-9lieD_bFHX32J8J36phzXiZ0491Q1tszz6PS5Uo'
  for (const key in config.params) {
    if (config.params[key] === null || config.params[key] === '') {
      delete config.params[key]
    }
  }

  return config
}, (error) => {
  console.log(error) // for debug
  Promise.reject(error)
})

axios.interceptors.response.use((response) => {

  if (EnvConfig.BASE_URL.indexOf('yapi.mockuai') > -1) {
    return response.data.data
  }
  console.log(response)
  const { code } = response.data

  if (code === -1) {
    // 未登录
    // window.location.hash = '/login'
    window.location.replace(`${window.location.origin + '#/login'}`)
    return Promise.reject(response.data.data)
  } else if (code === 1) {
    return Promise.resolve(response.data.data)
  } else {
    // message.warn(response.data.msg || '服务正忙，请稍后再试~')
    return Promise.reject(response.data.data)
  }
}, err => {
  // message.error('服务正忙，请稍后再试~')
  return Promise.reject(err)
})

// export const Get = (url: string, params?: object) => axios.get(url, { params }) as Promise<any>

// export const Post = (url: string, data?: object) => axios.post(url, data) as Promise<any>

export default axios

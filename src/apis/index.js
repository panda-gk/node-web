import http from '../js/ajax'

export const getHome = (params) => http.post('/users/login', params)
export const getIndex = (params) => http.get('/string', params)
export const getJson = (params) => http.get('/json', params)

export const getIndexTest = () => http.get('/users/bar')
export const login = (params) => http.post('/users/login', params)



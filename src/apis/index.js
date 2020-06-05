import http from '../js/ajax'

// export const getHome = (params) => http.post('/users/login', params)
// export const getIndex = (params) => http.get('/string', params)
// export const getJson = (params) => http.get('/json', params)

// export const getIndexTest = () => http.get('/users/bar')
// export const login = (params) => http.post('/users/login', params)
// 判断用户是否存在
export const isExist = (params) => http.post('/api/user/isExist', params)
// 注册
export const register = (params) => http.post('/api/user/register', params)
// 登陆
export const login = (params) => http.post('/api/user/login', params)
// 获取用户信息
export const getUserInfo = (params) => http.get('/api/user/info', params)
// 获取所有的用户信息
export const getUserList = (params) => http.get('/api/user/list', {params})
// 快速新建
export const quickCreate = (params) => http.get('/api/user/qkCreate', {params})
// 删除用户
export const delUser = (params) => http.get('/api/user/del', {params})
// 编辑用户
export const editUser = (params) => http.post('/api/user/edit', params)
// 创建文章
export const createBlog = (params) => http.post('/api/blog/add', params)
// 获取所有文章
export const getAllBlogs = (params) => http.post('/api/blog/list', params)
// 获取所有的用户
export const getAllUser = (params) => http.get('/api/fan/user', params)
// 成为别人的粉丝
export const attentionOther = (params) => http.get('/api/fan/attentionOther', {params})
// 我关注的
export const getAttentionOther = () => http.get('/api/fan/self/attention')
// 我的粉丝
export const getMyFan = () => http.get('/api/fan/myFan')




// 测试
export const getTestList = () => http.get('/api/test/list')
export const getTesDetail = () => http.get('/api/test/detail')
export const getTesDetail2 = (params) => http.get('/api/test/detail2', {params})
export const getTestLogin = (params) => http.post('/api/test/login', params)


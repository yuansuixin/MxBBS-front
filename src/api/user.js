import axios from '../utils/request'
import qs from 'qs'

// 用户签到
const userSign = () => {
  return axios.get('/user/fav')
}

// 更新用户基本资料
const updateUserInfo = data => axios.post('/user/basic', data)

// 确认修改用户名
const updateUsername = data => axios.get('/public/reset-email?' + qs.stringify((data)))

// 修改用户密码
const changePasswd = data => axios.post('/user/change-password', {
  ...data
})

const addCollect = data => axios.get('/user/set-collect?' + qs.stringify(data))

const getCollect = data => axios.get('/user/collect?' + qs.stringify(data))

const getPostListByUid = data => axios.get('/user/post?' + qs.stringify(data))
// 删除指定的文章
const deletePostByUid = data => axios.get('/user/delete-post?' + qs.stringify(data))

// 获取用户最近发表文章列表
const getPostPublic = data => axios.get('/public/latest-post?' + qs.stringify(data))

// 获取用户的基本信息
const getInfo = (data) => axios.get('/public/info' + qs.stringify(data))

// 获取用户最近评论列表
const getCommentList = data => axios.get('/public/lastest-comment?' + qs.stringify(data))

export {
  userSign, updateUserInfo, updateUsername, changePasswd, getPostPublic,
  addCollect, getCollect, getPostListByUid, deletePostByUid, getInfo, getCommentList
}

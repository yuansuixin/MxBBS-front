import axios from '../utils/request'
import qs from 'qs'
import store from '../store'

// 获取文章中的评论列表
const getComments = params => {
  const token = store.state.token
  let headers = {}
  if (token !== '') {
    headers = {
      headers: {
        Authorization: 'Bearer' + store.state.token
      }
    }
  }
  return axios.get('/public/comments?' + qs.stringify(params), headers)
}

const addComment = data => axios.post('/comment/reply', { ...data })
const updateComment = data => axios.post('/comments/update', { ...data })

const setCommentBest = params => axios.get('/comments/accept?' + qs.stringify(params))
const setHands = params => axios.get('/comments/hands?' + qs.stringify(params))

export {
  getComments, addComment, updateComment, setCommentBest, setHands
}

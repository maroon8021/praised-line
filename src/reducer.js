import { combineReducers } from 'redux'
// コメント取得のreducer
// import comment from './comment'

import user from './user'

// 作成したreducerをオブジェクトに追加していく
// combineReducersで１つにまとめてくれる
export default combineReducers({
  //comment
  user
})
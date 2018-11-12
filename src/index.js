import React  from 'react'
import ReactDOM from 'react-dom' // Can be replaced to import { render } from 'react-dom'
// applyMiddlewareを追加
import { createStore, applyMiddleware } from 'redux'
// react-reduxのProviderコンポーネントを追加
import { Provider } from 'react-redux'
import rootReducer from './reducers' // Is this name anything okay?

//import client from 'axios'
//import thunk from 'redux-thunk'

//import App from './pages/App'
import App from './components/App'
import reducer from './reducer'
import { tempFeedData } from './temp';
import { addFeed } from './actions';

// axiosをthunkの追加引数に加える
//const thunkWithClient = thunk.withExtraArgument(client)
// redux-thunkをミドルウェアに適用
//const store = createStore(reducer, applyMiddleware(thunkWithClient))

const store = createStore(rootReducer)

// Providerタグで囲うとApp内でstoreが利用可能になる
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
)

console.log(tempFeedData())
console.log(store.getState())
store.dispatch(addFeed(tempFeedData()))
store.dispatch(addFeed(tempFeedData()))
store.dispatch(addFeed(tempFeedData()))
store.dispatch(addFeed(tempFeedData()))
console.log(store.getState())

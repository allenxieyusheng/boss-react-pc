import { createStore,applyMiddleware ,combineReducers} from 'redux';
import logger from "redux-logger";
import thunk from "redux-thunk";
import { counter } from './reducer'



// const store = createStore(counter,applyMiddleware(logger, thunk))

// const store = createStore(
//     combineReducers({counter: counter}),
//     applyMiddleware(logger, thunk)
//  )

//注意 combineReducers返回的是一个OBJ，所以得count.num 获取
const Reducers = combineReducers({
    num:counter //这里的num获取
})
  
const store = createStore( 
    Reducers,
    applyMiddleware(logger, thunk)
);

export default store;


//异步插件 使用中间件 applyMiddleware ==>"redux-logger/redux-thunk


// 然后在dispacth就可以如下

// add:() => dispatch=>{
//     setTimeout(() => {
//         // 异步结束后，⼿手动执⾏行行dispatch
//         dispatch({ type: "add" }); 
//     }, 1000);
// }

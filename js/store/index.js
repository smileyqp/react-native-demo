import {applyMiddleware, createStore} from 'redux';

import reducers from '../reducer';
import {middleware} from '../navigator/AppNavigator';
/**
 * 自定义log中间件
 * https://cn.redux.js.org/docs/advanced/Middleware.html
 * @param store
 */

/**
 * 打印出func的自定义中间件
 * @param store
 * @returns {function(*): Function}
 */
const logger = store => next => action => {
    if (typeof action === 'function') {
        console.log('dispatching a function');
    } else {
        console.log('dispatching ', action);
    }
    const result = next(action);
    console.log('nextState ', store.getState());
    return result;
};



const middlewares = [
    middleware,
    logger
    
];

/**
 * 创建store
 */
export default createStore(reducers, applyMiddleware(...middlewares));
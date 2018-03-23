import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import freskaToilets from './reducers/index'

let store = compose(
    applyMiddleware(thunk)
)(createStore)(freskaToilets)

export default store
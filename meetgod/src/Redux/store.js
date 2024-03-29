import {legacy_createStore, applyMiddleware, compose, combineReducers} from "redux"
import thunk from "redux-thunk"
import {reducer as productReducer} from "./ProductsReducer/reducer"
import {reducer as AuthReducer} from "./AuthReducer/reducer"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({productReducer,AuthReducer});

const store = legacy_createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk))
)

export default store;
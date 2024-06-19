import {applyMiddleware, combineReducers, createStore} from "redux";
import {thunk} from "redux-thunk";
import fetchUsers from "../reducers/UserReducer";
const rootReducer = combineReducers({
     fetchUsers
})

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store
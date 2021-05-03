import { createStore , combineReducers , applyMiddleware } from "redux"
import thunk from "redux-thunk"

import { userReducer } from "./UserState/userReducer"
import { userStatsReducer } from "./UserStats/userStatsReducer";

import { persistStore , persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["userStats","userState"]
}

let reducer = combineReducers({
    userState : userReducer,
    userStats : userStatsReducer
})




const middleware = [thunk]
export const store = createStore(persistReducer(persistConfig , reducer),applyMiddleware(...middleware))
export const persistor = persistStore(store)
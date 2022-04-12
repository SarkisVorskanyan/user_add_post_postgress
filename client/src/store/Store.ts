
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import Post_reducer from "./reducer/Post_reducer";
import UserReducer from './reducer/User_reducer';

const rootReducer = combineReducers({
    user: UserReducer,
    post: Post_reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type rootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
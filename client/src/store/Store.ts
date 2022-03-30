
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import UserReducer from './reducer/User_reducer';

const rootReducer = combineReducers({
    user: UserReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type rootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
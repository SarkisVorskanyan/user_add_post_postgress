import { createUser } from './../action/User_actions';
import { IUser } from './../../models/UserTypes';
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { fetchAllUsers } from '../action/User_actions';

interface UserState {
    load: boolean,
    error: string | null,
    users: IUser[]
}

const initialState: UserState = {
    load: false,
    error: null,
    users: []
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
       
    },
    extraReducers: {
        [fetchAllUsers.pending.type]: (state) => {
            state.load = true
        },
        [fetchAllUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.load = false
            state.users = action.payload
            state.error = ''
        },
        [fetchAllUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.load = false
            state.error = action.payload
        },
        //Create user
        [createUser.pending.type]: (state) => {
            state.load = true
        },
        [createUser.fulfilled.type]: (state, action: PayloadAction) => {
            state.load = false
            state.error = ''
        },
        [createUser.rejected.type]: (state, action: PayloadAction<string>) => {
            state.load = false
            state.error = action.payload
        }
    }

})

export default UserSlice.reducer;
import { createUser, getOneUser, changeUserIfno, deleteUser } from './../action/User_actions';
import { IUser } from './../../models/UserTypes';
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { fetchAllUsers } from '../action/User_actions';

interface UserState {
    load: boolean,
    error: string | null,
    users: IUser[],
    userInfo: IUser | null 
}

const initialState: UserState = {
    load: false,
    error: null,
    users: [],
    userInfo: null
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
            state.users = action.payload.reverse()
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
        },

        //get one user
        [getOneUser.pending.type]: (state) => {
            state.load = true
        },
        [getOneUser.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.load = false
            state.userInfo = action.payload
            state.error = ''
        },
        [getOneUser.rejected.type]: (state, action: PayloadAction<string>) => {
            state.load = false
            state.error = action.payload
        },

        //change user info
        [changeUserIfno.pending.type]: (state) => {
            state.load = true
        },
        [changeUserIfno.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.load = false
            state.userInfo = action.payload
            state.error = ''
        },
        [changeUserIfno.rejected.type]: (state, action: PayloadAction<string>) => {
            state.load = false
            state.error = action.payload
        },

        //delete user
        [deleteUser.pending.type]: (state) => {
            state.load = true
        },
        [deleteUser.fulfilled.type]: (state, action: PayloadAction<number>) => {
            state.load = false
            state.error = ''
        },
        [deleteUser.rejected.type]: (state, action: PayloadAction<string>) => {
            state.load = false
            state.error = action.payload
        }

        
    }

})

export default UserSlice.reducer;
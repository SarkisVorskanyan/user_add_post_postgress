import { DataInputNewUser } from './../../models/DataInputNewUser';
import { IUser } from './../../models/UserTypes';
import { instance } from './../api/Api';
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchAllUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try{
            const response = await instance.get<IUser[]>('api/user')
            return response.data
        }
        catch (e) {
            return thunkAPI.rejectWithValue('404 error')
        }
    }
)

export const createUser = createAsyncThunk(
    'user/createUser',
    async (data: DataInputNewUser, thunkAPI) => {
        try{
            const response = await instance.post('api/user', data)
            return response.data
        }
        catch (e) {
            return thunkAPI.rejectWithValue('404 error')
        }
    }
)

export const getOneUser = createAsyncThunk(
    'user/createUser',
    async (data: number, thunkAPI) => {
        try{
            const response = await instance.get(`api/user${data}`)
            return response.data
        }
        catch (e) {
            return thunkAPI.rejectWithValue('404 error')
        }
    }
)
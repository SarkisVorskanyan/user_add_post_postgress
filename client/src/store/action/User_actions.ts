import { IUser } from './../../models/UserTypes';
import { instance } from './../api/Api';
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchAllUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try{
            const response = await instance.get<IUser[]>('/api/user')
            return response.data
        }
        catch (e) {
            return thunkAPI.rejectWithValue('404 error')
        }
    }
)
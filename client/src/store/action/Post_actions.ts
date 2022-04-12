import { PostType } from './../../models/PostTypes';
import { instance } from './../api/Api';
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchAllPosts = createAsyncThunk(
    'user/fetchAll',
    async (id: number, thunkAPI) => {
        try{
            debugger
            const response = await instance.get<PostType[]>(`api/post?id=${id}`)
            return response.data
        }
        catch (e) {
            debugger
            return thunkAPI.rejectWithValue('404 error')
        }
    }
)
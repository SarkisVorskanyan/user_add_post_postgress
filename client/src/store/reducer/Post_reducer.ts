import { fetchAllPosts } from './../action/Post_actions';
import { PostType } from './../../models/PostTypes';
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserState {
    load: boolean,
    error: string | null,
    posts: PostType[]
}

const initialState: UserState = {
    load: false,
    error: null,
    posts: []
}

export const PostSLice = createSlice({
    name: 'post',
    initialState,
    reducers: {
       
    },
    extraReducers: {
        [fetchAllPosts.pending.type]: (state) => {
            state.load = true
        },
        [fetchAllPosts.fulfilled.type]: (state, action: PayloadAction<PostType[]>) => {
            state.load = false
            state.posts = action.payload.reverse()
            state.error = ''
        },
        [fetchAllPosts.rejected.type]: (state, action: PayloadAction<string>) => {
            state.load = false
            state.error = action.payload
        },
        
    }

})

export default PostSLice.reducer;
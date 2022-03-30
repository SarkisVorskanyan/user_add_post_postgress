import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserState {
    load: string,
}

const initialState: UserState = {
    load: 'Marine',
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
       
    },
    extraReducers: {
      
    }

})

export default UserSlice.reducer;
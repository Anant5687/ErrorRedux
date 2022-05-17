import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user:[],
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.user.push(action.payload)
        },
        removeUser:(state, action)=>{
            state.user.splice(action, 1)
        },
    }
}) 
export const {addUser, removeUser} = userSlice.actions
export default userSlice.reducer;

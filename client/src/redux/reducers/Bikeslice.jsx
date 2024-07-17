import { createSlice } from "@reduxjs/toolkit";

const initialState={
    bikesdata:[]
}

export const Bikeslice=createSlice({
    name:'bike',
    initialState,
    reducers:{
        bikezone:(state,action)=>{
            state.bikesdata=action.payload
        },
    }
})

export const {bikezone} =Bikeslice.actions
export default Bikeslice.reducer
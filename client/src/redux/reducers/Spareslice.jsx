import { createSlice } from "@reduxjs/toolkit";

const initialState={
    sparedata:[]
}


export const Spareslice=createSlice({
    name:'Spare',
    initialState,
    reducers:{
        spareparts:(state,action)=>{
            state.sparedata=action.payload
        },
    }
})

export const {spareparts} =Spareslice.actions
export default Spareslice.reducer
import{configureStore} from '@reduxjs/toolkit'
import bikeReducer from './reducers/Bikeslice'
import SpareReducer from './reducers/Spareslice'



export const store=configureStore({
    reducer:{
        bike:bikeReducer,
        Spare:SpareReducer,
    },

  
})
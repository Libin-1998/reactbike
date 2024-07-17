import{configureStore} from '@reduxjs/toolkit'
import bikeReducer from './reducers/Bikeslice'


export const store=configureStore({
    reducer:{
        bike:bikeReducer,
    },
})
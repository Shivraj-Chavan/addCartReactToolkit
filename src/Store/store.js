import { configureStore } from "@reduxjs/toolkit";
import cartSystem from "../Store/Cartslice"

const store =configureStore({

    reducer:{
        Mycart:cartSystem
    }

})

export default store
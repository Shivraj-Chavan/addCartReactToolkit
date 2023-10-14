import { createSlice } from '@reduxjs/toolkit'
const cartSystem=createSlice({
name:"CART",
initialState:[],
reducers:{
    addcart(state,action){
  
            state.push(action.payload)

                console.log(state)

    },
    removecart(state,action){




    }
}


})

export const  {addcart} =cartSystem.actions

export default cartSystem.reducer
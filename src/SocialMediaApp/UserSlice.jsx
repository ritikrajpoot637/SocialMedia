import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const UserSlice = createSlice({
    name:'users',
    initialState:[ { id: 'id1', name: 'Ram' },
  { id: 'id2', name: 'Shyam' },
  { id: 'id3', name: 'Krishna' }],
    reducers:{
      addUser:(state,action)=>{
        
      }

    }
})
  

export default UserSlice.reducer
import React from 'react'
import { createSlice,nanoid } from '@reduxjs/toolkit'

 
const PostsSlice=createSlice({
    name:'posts',
   
      initialState:[
        
        {title:"first posts",content:"hellow" ,id:'id1',userId:'id1',date:"2026-03-22T19:01:37.187Z",reaction:{thumbsUp: 0,tada: 0,heart: 0,rocket: 0,eyes: 0 }},
        {title:"Secound posts",content:"More text",id:'id2',userId:'id2',date:"2026-03-22T19:01:37.187Z",reaction:{thumbsUp: 0,tada: 0,heart: 0,rocket: 0,eyes: 0 }},
    
    ],
    reducers:{
        postAdded:{
               reducer (state,action){ state.push(action.payload)},
             prepare(title,content,userId){
                return{
                    payload:{
                        id:nanoid(),
                        title,content,
                        userId,
                         date: new Date().toISOString() 
                         ,reaction:{thumbsUp: 0,tada: 0,heart: 0,rocket: 0,eyes: 0 },
                    }
                }
             }
        }
        
        
        ,
        editPost:(state,action)=>{
            const {id,title,content}=action.payload;
            const exstingPostobj=state.find((val)=>(val.id==id));
            if(exstingPostobj){
                exstingPostobj.title=title;
                exstingPostobj.content=content;
                exstingPostobj.date=new Date().toLocaleTimeString()
            }
        }
        ,reactionAdd:(state,action)=>{
           const{postId,name}=action.payload;
            const exstingPostobj=state.find((val)=>(val.id==postId));
            if(exstingPostobj){
                exstingPostobj.reaction[name]++;
                
                
            }

        }

    }

})
export const {postAdded,editPost,reactionAdd} =PostsSlice.actions
export default PostsSlice.reducer
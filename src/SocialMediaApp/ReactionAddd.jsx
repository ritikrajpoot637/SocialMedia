import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { reactionAdd } from './PostsSlice'
const ReactionAddd = ({val}) => {
    const reaction={
     thumbsUp: '👍',
  tada: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀'
    }




    const postId=val.id;
    

 const read=state=>state.posts
 const posts=useSelector(read);
 const dispatch=useDispatch();
 const react1=(name)=>{
    

    dispatch(reactionAdd({postId,name}))
 }

    

  return (
    <>
    <div className='d-flex gap-1'>
    <button className='btn btn-primary' onClick={()=>{react1("thumbsUp")}} >{reaction.thumbsUp}:{val.reaction.thumbsUp}</button>

    <button className='btn btn-primary' onClick={()=>{react1("tada")}}>{reaction.tada}:{val.reaction.tada}</button>
    <button className='btn btn-primary' onClick={()=>{react1("heart")}}>{reaction.heart}:{val.reaction.heart}</button>
    <button className='btn btn-primary' onClick={()=>{react1("rocket")}}>{reaction.rocket}:{val.reaction.rocket}</button>
    <button className='btn btn-primary' onClick={()=>{react1("eyes")}}>{reaction.eyes}:{val.reaction.eyes}</button>
    
    </div>
    </>
  )
}

export default ReactionAddd
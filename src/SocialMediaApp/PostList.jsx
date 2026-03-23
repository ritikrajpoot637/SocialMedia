import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { postAdded } from './PostsSlice'
import { Link, Outlet, useNavigate } from 'react-router'
import ReactionAddd from './ReactionAddd'



const PostList = () => {
    const posts = useSelector(state => state.posts);
    const navigate = useNavigate();
     const users=useSelector(state=>state.users);
    const [isSorted, setIsSorted] = useState(false);

   
    const displayPosts = isSorted 
        ? [...posts].sort((a, b) => b.date.localeCompare(a.date)) 
        : posts;

    const sort = () => {
        setIsSorted(!isSorted);
    };


    
    return (
        <div className="container mt-4">
            <div className="d-flex  justify-content-between align-items-center mb-4">
                <h2 className="text-primary">Social Feed</h2>
                <button className="btn btn-success" onClick={() => navigate('/addPost')}>
                    + Add New Post
                </button>
                <button className="btn btn-success" onClick={sort}>
                   Sort Post By Time
                </button>
            </div>

            <div className="row">
                {displayPosts.map((post) => (
                    <div className="col-md-12 mb-3" key={post.id}>
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title text-capitalize">{post.title}</h5>
                                <p className="card-text text-secondary">{post.content}</p>

                                 {users.filter((val)=>{return val.id==post.userId }).map((val)=>{return(
                                     <p   className="card-text text-secondary">Author:{val.name}</p>);
                                  })} 

                                 <small className="text-muted">{post.date}</small>
                               
                                <Link to={`/singlepost/${post.id}`}><button className='btn btn-info m-4 px-2'>Single Post</button></Link>
                                <Link to={`/editpost/${post.id}`}><button className='btn btn-info'>Edit Post</button></Link>
                                <ReactionAddd val={post}/>

                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default PostList
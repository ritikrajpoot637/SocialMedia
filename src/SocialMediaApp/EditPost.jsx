import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { editPost } from './PostsSlice';
import { useDispatch } from 'react-redux'

import { useNavigate } from 'react-router'

const EditPost = () => {
    const {id}=useParams();
      const dispatch = useDispatch();
        const navigate = useNavigate();
    const read=(state)=>{return state.posts}
    const posts=useSelector(read);
    const postobj=posts.find((val)=>(val.id==id));
     const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

     const handle = (e) => {
            e.preventDefault();
            if (title && content) {
                dispatch(editPost({ id,title, content}));
                navigate('/'); // Auto-redirect after adding
            }
        }
    

  return (
  <>
    

      <div className="container mt-5">
            <div className="card p-4 shadow mx-auto" style={{ maxWidth: '500px' }}>
                <h3 className="mb-4 text-center">Edit Post</h3>
                <form onSubmit={handle}>
                    <div className="mb-3">
                        <label className="form-label">Post Title</label>
                        <input 
                            className="form-control" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                            placeholder="Enter title..."
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Content</label>
                        <textarea 
                            className="form-control" 
                            rows="4"
                            value={content} 
                            onChange={(e) => setContent(e.target.value)} 
                            placeholder="What's on your mind?"
                        />
                    </div>
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary">Publish Post</button>
                        <button type="button" className="btn btn-outline-secondary" onClick={() => navigate('/')}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>

  </>
  )
}

export default EditPost
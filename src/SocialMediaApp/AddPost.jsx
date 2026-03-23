import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { postAdded } from './PostsSlice'
import { useNavigate } from 'react-router'
import { allSelector } from './Selector'

 
 
 const AddPost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [userId, setUserId] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users=useSelector(state=>state.users);

    const handle = (e) => {
        e.preventDefault();
        if (title && content && userId) {
            dispatch(postAdded(title, content,userId ));
            navigate('/postList'); // Auto-redirect after adding
        }
    }

     const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

    return (
        <div className="container mt-5">
            <div className="card p-4 shadow mx-auto" style={{ maxWidth: '500px' }}>
                <h3 className="mb-4 text-center">Create New Post</h3>
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
    <label className="form-label" htmlFor="postAuthor">Author:</label>
    <select 
        className="form-control" 
        id="postAuthor" 
        name="postAuthor" 
        required
        value={userId} 
        onChange={(e) => setUserId(e.target.value)} 
    >
        <option value="">Select an Author</option>
        {usersOptions}
    </select>
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
                        <button type="button" className="btn btn-outline-secondary" onClick={() => navigate('/postList')}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

 
 export default AddPost
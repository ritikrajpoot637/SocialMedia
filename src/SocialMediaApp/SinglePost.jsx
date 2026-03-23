import React from 'react'
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router' // Import useNavigate

const SinglePost = () => {
    const { id } = useParams();
    console.log(id)
    const navigate = useNavigate(); // Define navigate
    const read = state => state.posts;
    const post = useSelector(read);

    return (
        <div className="container mt-4">
         
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="text-primary">Single Post</h2>
              
            </div>



            {
                post.filter((val) => val.id.toString() === id)
                    .map((val) => {
                        return (
                            // Add a unique key here
                            <div key={val.id} className="card shadow" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title text-primary">{val.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">{val.content}</h6>
                                    {/* Added text inside the button */}
                                    <button className="btn btn-sm btn-secondary" onClick={() => navigate('/postList')}>
                                        Back to Feed
                                    </button>
                                </div>
                            </div>
                        );
                    })
            }
        </div>
    )
}

export default SinglePost

import { React, useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from 'axios'

const Post = () => {
    const { postID } = useParams()
    const [post, setPost] = useState()
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER}/api/posts/${postID}`)
        .then(
            res => {
                const data = res.data;
                setPost(data)
            },
            err => {setError(err)}
        )}, [postID]);

    if (error) {return (<h2 className='container'>{error.message}</h2>)}
    if (!post) {return (<h2 className='container'>Loading</h2>)}

    document.title = `${post.title}`


    return (
        <div className='container'>
            <div className="p-5 mb-4 bg-light rounded-3 border">
                <Link type="button" className="btn-close" aria-label="Close" to='/'/>
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">{post.title}</h1>
                    <p className="col-md-8 fs-4">{post.headText}</p>
                </div>
            </div>

            <div className="row align-items-md-stretch">
                <div className="col-md-6 mb-3">
                    <div className="h-100 p-5 bg-light border rounded-3">
                        <p className='fs-4'>{post.bottomText}</p>
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <img src={post.image} alt="" className='w-100 rounded-3'/>
                </div>
            </div>
        </div>
    );
}

export default Post;

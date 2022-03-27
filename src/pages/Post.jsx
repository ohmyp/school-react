import { useParams } from "react-router-dom";
import axios from 'axios'
import { useState, useEffect } from "react";
import draftToHtml from 'draftjs-to-html';
import { CloseButton } from "../components";

const Post = () => {
    const { postID } = useParams()
    const [post, setPost] = useState()
    const [error, setError] = useState(null)
  
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/api/posts/${postID}`)
        .then(res => {
                let data = res.data[0]
                document.title = data.title
                data = `<h1>${data.title}</h1>` + draftToHtml(JSON.parse(data.postBody))
                setPost(data)
              },
              err => {setError(err)}
        )}, [postID]);
  
    if (error) {return (<h2 className='container'>{error.message}</h2>)}
    if (!post) {return (<h2 className='container'>Loading</h2>)}
  
    return (
      <div className="container">
        <CloseButton />
        <div dangerouslySetInnerHTML={{__html: post}}/>
      </div>
    )
}

export default Post;

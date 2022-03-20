import { useState, useEffect } from "react";
import draftToHtml from 'draftjs-to-html';
import axios from "axios";
import { CloseButton } from "../components";

const Test = () => {
  const postID  = 4
  const [post, setPost] = useState()
  const [error, setError] = useState(null)

  useEffect(() => {
      axios.get(`${process.env.REACT_APP_API}/api/posts/${postID}`)
      .then(res => {
              let data = res.data
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

export default Test;

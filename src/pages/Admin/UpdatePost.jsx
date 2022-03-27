import { useState, useEffect } from "react"
import axios from "axios"
import { CloseButton, FileLoader } from "../../components"
import { useLocation } from "react-router-dom"

import { Editor } from "react-draft-wysiwyg";

import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';

import draftToHtml from 'draftjs-to-html';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const CreatePost = () => {
    document.title = "Редактирование поста"

    const { pathname } = useLocation()
    const fileFolder = pathname.split('/').join('-').slice(1)
   
    const [posts, setPosts] = useState([])
    const [postNumber, setPostNumber] = useState(null)

    const [inputData, setInputData] = useState({title: '', postBody: '', image: ''})
    const [imgURL, setImgURL] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const [deleteSuccess, setDeleteSuccess] = useState(false)

    const [editorState, setEditorState] = useState(() => EditorState.createEmpty())

    const inputHandler = (e) => {
        const { name, value } = e.target
        setInputData({ ...inputData, [name]: value })
    }

    useEffect(() => {
        if (postNumber) axios.get(`${process.env.REACT_APP_API}/api/posts/${postNumber}`)
            .then(res => {
                res.data = res.data[0]
                setInputData({ 
                    ...inputData, 
                    id: res.data.id, 
                    title: res.data.title, 
                    postBody: res.data.postBody, 
                    image: res.data.image, 
                })
                setEditorState(EditorState.createWithContent(convertFromRaw(JSON.parse(res.data.postBody))))
            })
            .catch(e => {
               console.log(e);
            })
    }, [postNumber])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/api/posts/`)
            .then(res => {
                setPosts(res.data);
            })
            .catch(e => {
               console.log(e);
            })
    }, [])

    useEffect(() => {
        setInputData({ ...inputData, image: imgURL })
    }, [imgURL]);

    async function updatePost(e){
        e.preventDefault()
        await axios.post(`${process.env.REACT_APP_API}/api/posts/${inputData.id}/update/`, {
            title: inputData.title,
            postBody: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
            image: inputData.image
        }, {
            headers: {
             'Authorization': `Bearer ${localStorage.access_token}`   
            }
        })
        .then(res => {
            setSuccess(true)
        })
        .catch( (error) => {
              setError(error.response.data.message)
              setSuccess(false)
          });
    }
    async function deletePost(e) {
        e.preventDefault()
        await axios.get(`${process.env.REACT_APP_API}/api/posts/${inputData.id}/delete/`, {
            headers: {
             'Authorization': `Bearer ${localStorage.access_token}`   
            }
        })
        .then(res => {
            setDeleteSuccess(true)
            setTimeout(() => {
                window.location.reload()
            }, 1000);
        })
        .catch( (error) => {
              setError(error.response.data.message)
              setDeleteSuccess(false)
          });
    }
    return (
        <div className="container">
            <CloseButton/>
            <h1>Редактирование поста</h1>
            <select className="form-select mb-2 disabled" onChange={e => setPostNumber(e.target.value)}>
                    <option value={0}>Выберите пост</option>
                    {posts.length > 0 ? posts.map(post => <option key={post.title} value={post.id}>{post.id}. {post.title}</option>) : <></>}
            </select>
            <div className="form-floating">
                <textarea disabled={!postNumber} onChange={inputHandler} value={inputData.title} className="form-control mb-2" name="title" id="title" style={{'height': "100px"}}></textarea>
                <label htmlFor="title">Заголовок</label>
            </div>

            <div className="form-floating">
                <textarea onChange={e => setInputData({...inputData, image: e.target.value})} value={inputData.image} className="form-control mb-2" name="image" id="image" style={{'height': "100px"}}></textarea>
                <label htmlFor="title">Ссылка на изображение</label>
            </div>

            <div className="rounded border mb-2">
                <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={setEditorState}
                />
            </div>

            <div className="form-floating">
                <input value={imgURL} readOnly className="form-control mb-2" name="image" id="image"/>
                <label htmlFor="image">Ссылка на картинку появится тут после загрузки</label>
            </div>
            <FileLoader fileFolder={fileFolder} cb={setImgURL}/>
            <div className="rounded border mt-2 p-2">
                <label>Предпросмотр</label>
                <hr />
                <h2>{inputData.title}</h2>
                <div dangerouslySetInnerHTML={{__html: draftToHtml(convertToRaw(editorState.getCurrentContent()))}}/>
            </div>
            <button onClick={updatePost} className={postNumber ? 'btn btn-primary mt-2' : 'btn btn-primary mt-2 disabled'}>Обновить пост</button>
            <button onClick={deletePost} className='btn btn-danger mt-2 ms-2'>Удалить пост</button>
            {error?<div className='alert alert-danger mt-2'>{error}</div>:<></>}
            {deleteSuccess?<div className='alert alert-warning mt-2'>Пост успешно удален</div>:<></>}
            {success?<div className='alert alert-success mt-2'>Пост успешно обновлен</div>:<></>}

        </div>
    );
}

export default CreatePost;

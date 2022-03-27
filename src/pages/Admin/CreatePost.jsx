import { useState, useEffect } from "react"
import axios from "axios"
import { CloseButton, FileLoader } from "../../components"
import { useLocation } from "react-router-dom"
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const CreatePost = () => {
    document.title = "Создание поста"

    const { pathname } = useLocation()
    const fileFolder = pathname.split('/').join('-').slice(1)

    const [inputData, setInputData] = useState({title: '', postBody: EditorState.createEmpty(), image: ''})
    const [imgURL, setImgURL] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

    const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
    // console.log(inputData.postBody.getCurrentContent())
    // console.log(convertFromRaw(JSON.parse(JSON.stringify(convertToRaw(inputData.postBody.getCurrentContent())))))

   useEffect(() => {
       setInputData({...inputData, postBody: editorState})       
   }, [editorState]);

    async function createPost(e){
        e.preventDefault()
        await axios.post(`${process.env.REACT_APP_API}/api/posts/create/`, {
            title: inputData.title,
            postBody: JSON.stringify(convertToRaw(inputData.postBody.getCurrentContent())),
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

    return (
        <div className="container">
            <CloseButton/>
            <h1>Создание поста</h1>
            <div className="form-floating">
                <textarea onChange={e => setInputData({...inputData, title: e.target.value})} value={inputData.title} className="form-control mb-2" name="title" id="title" style={{'height': "100px"}}></textarea>
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
            <button onClick={createPost} className={'btn btn-primary mt-2'}>Создать пост</button>
            {error?<div className='alert alert-danger mt-2'>{error}</div>:<></>}
            {success?<div className='alert alert-success mt-2'>Пост успешно создан</div>:<></>}

        </div>
    );
}

export default CreatePost;

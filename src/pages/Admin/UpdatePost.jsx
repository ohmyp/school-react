import { useState, useEffect } from "react"
import axios from "axios"
import { CloseButton, FileLoader } from "../../components"
import { useLocation } from "react-router-dom"

const CreatePost = () => {
    document.title = "Редактирование поста"

    const { pathname } = useLocation()
    const fileFolder = pathname.split('/').join('-').slice(1)

    const inputState = {id: '', title: '', headText: '', bottomText: '', image: ''}
    const isOkState = {id: true, title: false, headText: false, bottomText: false, image: false}
   
    const [posts, setPosts] = useState([])
    const [postNumber, setPostNumber] = useState(null)
    const [refresh, setRefresh] = useState(true)

    const [inputData, setInputData] = useState(inputState)
    const [formIsOk, setFormIsOk] = useState(isOkState)
    const [canSubmit, setCanSubmit] = useState(false)
    const [imgURL, setImgURL] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const [deleteSuccess, setDeleteSuccess] = useState(false)

    const inputHandler = (e) => {
        const { name, value } = e.target
        setInputData({ ...inputData, [name]: value })
        if (value === ''){
            setFormIsOk({...formIsOk, [name]: false })
        }
        else {
            setFormIsOk({...formIsOk, [name]: true })
        }
    }
    useEffect(() => {
        if (postNumber) axios.get(`${process.env.REACT_APP_API}/api/posts/${postNumber}`)
            .then(res => {
                setInputData({ 
                    ...inputData, 
                    id: res.data.id, 
                    title: res.data.title, 
                    headText: res.data.headText, 
                    bottomText: res.data.bottomText, 
                    image: res.data.image, 
                })
                setFormIsOk({...formIsOk, id: true, title: true, headText: true, bottomText: true, image: true })
                console.log(res.data);
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
    }, [refresh])

    useEffect(() => {
        setSuccess(false)
        setError('')
        if (Object.values(formIsOk).every(Boolean)){
            setCanSubmit(true)
        } else {
            setCanSubmit(false)
        }
    }, [inputData, formIsOk])

    useEffect(() => {
        setInputData({ ...inputData, image: imgURL })
        setFormIsOk({...formIsOk, image: Boolean(imgURL) })
        setSuccess(false)
        setError('')
    }, [imgURL]);

    async function updatePost(e){
        e.preventDefault()
        await axios.post(`${process.env.REACT_APP_API}/api/posts/${inputData.id}/update/`, inputData, {
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
                <input disabled={!postNumber} value={inputData.id} className="form-control mb-2" name="id" id="id"></input>
                <label htmlFor="id">Номер</label>
            </div>
            <div className="form-floating">
                <textarea disabled={!postNumber} onChange={inputHandler} value={inputData.title} className="form-control mb-2" name="title" id="title" style={{'height': "100px"}}></textarea>
                <label htmlFor="title">Заголовок</label>
            </div>
            <div className="form-floating">
                <textarea disabled={!postNumber} onChange={inputHandler} value={inputData.headText} className="form-control mb-2" name="headText" id="headText" style={{'height': "100px"}}></textarea>
                <label htmlFor="headText">Основной текст</label>
            </div>
            <div className="form-floating">
                <textarea disabled={!postNumber} onChange={inputHandler} value={inputData.bottomText} className="form-control mb-2" name="bottomText" id="bottomText" style={{'height': "100px"}}></textarea>
                <label htmlFor="bottomText">Дополнительный текст</label>
            </div>
            <div className="form-floating">
                <textarea disabled={!postNumber} onChange={inputHandler} value={inputData.image} className="form-control mb-2" name="image" id="image" style={{'height': "100px"}}></textarea>
                <label htmlFor="image">Вставьте ссылку на картинку или загрузите в форму ниже</label>
            </div>
            <FileLoader fileFolder={fileFolder} cb={setImgURL}/>
            <button onClick={updatePost} className={canSubmit?'btn btn-primary mt-2':'btn btn-primary mt-2 disabled'}>Обновить пост</button>
            <button onClick={deletePost} className={canSubmit?'btn btn-danger mt-2 ms-2':'btn btn-danger mt-2 ms-2 disabled'}>Удалить пост</button>
            {error?<div className='alert alert-danger mt-2'>{error}</div>:<></>}
            {deleteSuccess?<div className='alert alert-warning mt-2'>Пост успешно удален</div>:<></>}
            {success?<div className='alert alert-success mt-2'>Пост успешно обновлен</div>:<></>}

        </div>
    );
}

export default CreatePost;

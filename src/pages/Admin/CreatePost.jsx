import { useState, useEffect } from "react"
import axios from "axios"
import { FileLoader } from "../../components"
import { useLocation } from "react-router-dom"

const CreatePost = () => {
    const { pathname } = useLocation()
    const fileFolder = pathname.split('/').join('-').slice(1)

    const inputState = {id: '', title: '', headText: '', bottomText: '', image: ''}
    const isOkState = {id: true, title: false, headText: false, bottomText: false, image: false}

    const [inputData, setInputData] = useState(inputState)
    const [formIsOk, setFormIsOk] = useState(isOkState)
    const [canSubmit, setCanSubmit] = useState(false)
    const [imgURL, setImgURL] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const [lastPostID, setLastPostID] = useState('')
    console.log(inputData);

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
        axios.get(`${process.env.REACT_APP_SERVER}/api/posts/`)
            .then(res => {
                setLastPostID(res.data[res.data.length-1].id)
                setInputData({ ...inputData, id: lastPostID+1 || 1 })
                setFormIsOk({...formIsOk, id: true })
            })
            .catch(e => {
                setInputData({ ...inputData, id: 1 })
                setFormIsOk({...formIsOk, id: true })
            })
    }, [canSubmit,])
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


    async function createPost(e){
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_SERVER}/api/posts/create/`, inputData)
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
            <h1>Создание поста</h1>
            <div className="form-floating">
                <input value={lastPostID+1} className="form-control mb-2" disabled name="id" id="id"></input>
                <label htmlFor="id">Номер (генерируется автоматически)</label>
            </div>
            <div className="form-floating">
                <textarea onChange={inputHandler} value={inputData.title} className="form-control mb-2" name="title" id="title" style={{'height': "100px"}}></textarea>
                <label htmlFor="title">Заголовок</label>
            </div>
            <div className="form-floating">
                <textarea onChange={inputHandler} value={inputData.headText} className="form-control mb-2" name="headText" id="headText" style={{'height': "100px"}}></textarea>
                <label htmlFor="headText">Основной текст</label>
            </div>
            <div className="form-floating">
                <textarea onChange={inputHandler} value={inputData.bottomText} className="form-control mb-2" name="bottomText" id="bottomText" style={{'height': "100px"}}></textarea>
                <label htmlFor="bottomText">Дополнительный текст</label>
            </div>
            <div className="form-floating">
                <textarea onChange={inputHandler} value={inputData.image} className="form-control mb-2" name="image" id="image" style={{'height': "100px"}}></textarea>
                <label htmlFor="image">Вставьте ссылку на картинку или загрузите в форму ниже</label>
            </div>
            <FileLoader fileFolder={fileFolder} cb={setImgURL}/>
            <button onClick={createPost} className={canSubmit?'btn btn-primary mt-2':'btn btn-primary mt-2 disabled'}>Создать пост</button>
            {error?<div className='alert alert-danger mt-2'>{error}</div>:<></>}
            {success?<div className='alert alert-success mt-2'>Пост успешно создан</div>:<></>}

        </div>
    );
}

export default CreatePost;

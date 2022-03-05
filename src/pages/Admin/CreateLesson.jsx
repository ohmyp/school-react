import { useState, useEffect } from "react"
import axios from "axios"
import { CloseButton, FileLoader } from "../../components"
import { useLocation } from "react-router-dom"

const CreateLesson = () => {
    document.title = "Создание урока"
    const { pathname } = useLocation()
    const fileFolder = pathname.split('/').join('-').slice(1)
    const inputState = {type: '', id: '', title: '', files:[]}
    const isOkState = {type: false, id: false, title: false, files: false}

    const [category, setCategory] = useState(null)
    const [files, setFiles] = useState([])
    const [selectedFile, setSelectedFile] = useState(null)
    const [refresh, setRefresh] = useState(true)

    const [inputData, setInputData] = useState(inputState)
    const [formIsOk, setFormIsOk] = useState(isOkState)
    const [canSubmit, setCanSubmit] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    console.log(inputData);
    
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
        axios.get(`${process.env.REACT_APP_SERVER}/api/files/createlesson`)
            .then(res => {
                setFiles(JSON.parse(res.data))
            })
            .catch(e => {
                console.log(e)
            })
    }, [category, refresh])

    async function createPost(e){
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_SERVER}/api/profession/${category}/create/`, inputData)
        .then(res => {
            setSuccess(true)
        })
        .catch( (error) => {
              setError(error.response.data.message)
              setSuccess(false)
          });
    }
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
    const addFile = () => {
        inputData.files.push({fileName: selectedFile, href: selectedFile})
        setRefresh(!refresh)
        if (inputData.files.length < 1){
            setFormIsOk({...formIsOk, files: false })
        }
        else {
            setFormIsOk({...formIsOk, files: true })
        }
    }
    const deleteFile = (e) => {
        const toRemove = e.target.value
        inputData.files.pop({fileName:toRemove, href:toRemove})
        setRefresh(!refresh)
        if (inputData.files.length < 1){
            setFormIsOk({...formIsOk, files: false })
        }
        else {
            setFormIsOk({...formIsOk, files: true })
        }
    }
    const refreshFiles = () => {
        setRefresh(!refresh)
    }
    const categoryOnChange = (e) => {
        setInputData({ ...inputData, type: e.target.value })
        setFormIsOk({...formIsOk, type: true })
        setCategory(e.target.value)
    }
    const renameFile = (e) => {
        const {name, value} = e.target
        let foundItem = inputData.files.find(file => file.href === name)
        foundItem.fileName = value
    }
    return (
        <div className="container">
            <CloseButton/>
            <h1>Создание карточки урока</h1>
            <select className="form-select mb-2" onChange={categoryOnChange}>
                <option>Выберите категорию</option>
                <option value="pupils">Ученику</option>
                <option value="teachers">Учителю</option>
                <option value="tests">Анкетирование</option>
            </select>
            <div className="form-floating">
                <input onChange={inputHandler} value={inputData.id} className="form-control mb-2" name="id" id="id"></input>
                <label htmlFor="id">Номер занятия</label>
            </div>
            <div className="form-floating">
                <input onChange={inputHandler} value={inputData.title} className="form-control mb-2" name="title" id="title"></input>
                <label htmlFor="title">Заголовок</label>
            </div>
            <div className="mb-2">
                <label>Прикрепить файлы</label>
                <select className="form-select mb-2" onChange={e => setSelectedFile(e.target.value)}>
                    <option>Выберите файл</option>
                    {files.length > 0 ? files.map(file => <option key={file} value={file}>{file}</option>) : <option>Выберите файл</option>}
                </select>
                <button className="btn btn-primary" onClick={addFile}>Прикрепить</button>
                <button className="btn btn-primary ms-2" onClick={refreshFiles}>Обновить список</button>
                {inputData.files.length > 0 ? 
                inputData.files.map((file, i) => 
                    <div className="input-group mt-2" key={file.href + i}>
                        <input name={file.href} className="form-control" placeholder={file.href} onChange={renameFile}/>
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2" value={file.href} onClick={deleteFile}>Удалить</button>
                    </div>
                ) 
                : <></>}
            </div>
            <div className="mb-2">
                <label>Загрузить файлы</label>
                <FileLoader fileFolder={fileFolder} cb={null}/>
            </div>
            <button onClick={createPost} className={canSubmit?'btn btn-primary mt-2':'btn btn-primary mt-2 disabled'}>Создать урок</button>
            {error?<div className='alert alert-danger mt-2'>{error}</div>:<></>}
            {success?<div className='alert alert-success mt-2'>Урок успешно создан</div>:<></>}

        </div>
    );
}

export default CreateLesson;

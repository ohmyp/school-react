import { useState } from 'react';
import axios from 'axios'
import { useLocation } from "react-router-dom";

const FileLoader = ({id}) => {
    const pathname = useLocation().pathname.split('/').join('-')
    const [selectedFile, setSelectedFile] = useState()
	const [isFilePicked, setIsFilePicked] = useState(false)
    const [loadingError, setLoadingError] = useState(null)
    const [successfulLoading, setSuccessfulLoading] = useState(false)

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0])
        setSuccessfulLoading(false)
		setIsFilePicked(true)
	};

    const onSubmit = (e) => {
        e.preventDefault()
        setIsFilePicked(false)
        const formData = new FormData()
        formData.append('filedata', selectedFile)
        axios.post(`http://localhost:3001/api/upload/${pathname}`, formData, {
        }).then(res => {
            console.log(res)
            setSuccessfulLoading(true)
            setLoadingError(null)
        }).catch((error) => {
            setLoadingError(error)
        });
    }

    return (
        <form onSubmit={onSubmit}>
            <h4 className="card-title">Загрузка работы</h4>
            <div className="input-group">
                <input type="file" className="form-control" name='filedata' onChange={changeHandler}/>
                {isFilePicked?
                <button className="btn btn-outline-secondary" >Загрузить</button>:
                <button className="btn btn-outline-secondary disabled" >Загрузить</button>
                }
            </div>
            {successfulLoading?<div className='alert alert-success mt-2'>Файл загружен успешно!</div>:<></>}
            {loadingError?<div className='alert alert-danger mt-2'>Ошибка при загрузке файла!</div>:<></>}
        </form>
    );
}

export default FileLoader;

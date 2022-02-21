import { useState } from 'react';
import axios from 'axios'

const FileLoader = ({fileFolder, cb}) => {
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
        axios.post(`${process.env.REACT_APP_SERVER}/api/upload/${fileFolder}`, formData, {
        }).then(res => {
            cb?cb(res.data.link):console.log();;
            setSuccessfulLoading(true)
            setLoadingError(null)
        }).catch((error) => {
            setLoadingError(error)
        });
    }

    return (
        <form onSubmit={onSubmit}>
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

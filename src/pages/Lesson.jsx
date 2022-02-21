import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { FileLoader } from '../components';

const Lesson = () => {
    const { pathname } = useLocation()
    const fileFolder = pathname.split('/').join('-').slice(1)
    const id = pathname.split('/')[pathname.split('/').length-1]

    const [lesson, setLesson] = useState(null)
    const [error, setError] = useState(null)
    const [noLessonExists, setNoLessonExists] = useState(null)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER}/api/profession/teachers`)
        .then(res => {
            const data = res.data[id-1]
            setLesson(data)
            if (!data) {setNoLessonExists(true)}
            },
            err => {setError(err)}
        )
    }, [id,])
    if (noLessonExists) {return <Navigate to='/notfound'/>}
    if (error) {return (<h2 className='container'>{error.message}</h2>)}
    return (
        <div className='container'>
            <h2>Материалы к занятию №{id}</h2>
            <h4 className="card-title">Загрузка работы</h4>
            <FileLoader fileFolder={fileFolder}/>
            <div className="col-sm-12 col-md-6 col-lg-3">
                <div className="row mt-2">
                        {lesson ? lesson.files.map(file => {
                                return <div className="card" style={{width: 'auto'}}>
                                            <img src={lesson.image} className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-text">{file.fileName}</h5>
                                                <a href={`${process.env.REACT_APP_SERVER}/api/download/`+file.href} className='btn btn-primary w-100'>Скачать</a>
                                            </div>
                                        </div>
                                            })
                        : <>Загрузка...</>}
                </div>
            </div>
        </div>
    );
}

export default Lesson;

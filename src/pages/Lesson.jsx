import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { CloseButton, FileLoader } from '../components';

const Lesson = () => {
    const { pathname } = useLocation()
    const fileFolder = pathname.split('/').join('-').slice(1)
    const id = pathname.split('/')[pathname.split('/').length-1]
    const category = pathname.split('/')[pathname.split('/').length-2]

    const [lesson, setLesson] = useState(null)
    const [error, setError] = useState(null)
    const [noLessonExists, setNoLessonExists] = useState(null)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/api/profession/${category}/${id}`)
        .then(res => {
            console.log(res.data);
            const data = res.data[0]
            setLesson(data)
            if (!data) {setNoLessonExists(true)}
            },
            err => {setError(err)}
        )
    }, [id, ])
    if (noLessonExists) {return <Navigate to='/notfound'/>}
    if (error) {return (<h2 className='container'>{error.message}</h2>)}
    document.title = `Занятие №${id}`

    return (
        <div className='container'>
            <CloseButton />
            <h2>Материалы к занятию №{id}</h2>
            <h4 className="card-title">Загрузка работы</h4>
            <FileLoader fileFolder={fileFolder}/>
            <div className="row row-cols-1 row-cols-md-2 row-cols-sm-1 row-cols-lg-3">
                {lesson ? lesson.files.map(file => {
                    return <div key={file.fileName} className='col mt-2'>
                        <div className="card mt-2 text-center" key={file.fileName} style={{width: 'auto'}}>
                            <p className="card-header">Материалы для выполенения задания</p>
                            <div className="card-body">
                                <h4 className="card-title">{file.fileName}</h4>
                                <p className="card-text">Нажмите кнопку ниже, чтобы загрузить материалы</p>
                                <a href={`${process.env.REACT_APP_API}/api/download/`+file.href} className='btn btn-primary w-100'>Скачать</a>
                            </div>
                        </div>
                    </div>
                    })
                : <>Загрузка...</>}
            </div>
        </div>
    );
}

export default Lesson;

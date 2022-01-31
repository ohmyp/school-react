import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { FileLoader } from '../components';

const lessons = [
    {
        id:1,
        title:"Лекция к занятию №1",
        image:'https://icons.iconarchive.com/icons/carlosjj/microsoft-office-2013/256/Word-icon.png',
        href:'https://icons.iconarchive.com/icons/carlosjj/microsoft-office-2013/256/Word-icon.png'
    },
    {
        id:2,
        title:"Лекция к занятию №2",
        image:'https://icons.iconarchive.com/icons/carlosjj/microsoft-office-2013/256/Word-icon.png',
        href:'https://icons.iconarchive.com/icons/carlosjj/microsoft-office-2013/256/Word-icon.png'
    }
]

const Lesson = () => {
    const {pathname} = useLocation()
    const id = pathname.split('/')[pathname.split('/').length-1]
    if (id > lessons.length){
        return <Navigate to={'../notfound'} />
    }
    
    return (
        <div className='container'>
            <h2>Материалы к занятию №{id}</h2>
            <FileLoader id={pathname}/>
            <div className="row mt-2">
            {lessons.map((lesson, i) => {
                return <div className="col-sm-12 col-md-6 col-lg-3" key={lesson.title + i}>
                    <div className="card" style={{width: 'auto'}}>
                        <img src={lesson.image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-text">{lesson.title}</h5>
                            <a href={lesson.href} className='btn btn-primary w-100'>Скачать</a>
                        </div>
                    </div>
                </div>
            })}    
            </div>
        </div>
    );
}

export default Lesson;

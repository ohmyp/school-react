import React from 'react';
import { Link } from 'react-router-dom';
import './LessonPreview.css'

const Lesson = ({image, title, id, date, author}) => {
        
    return (
        <div className="col mt-2">
            <div className="card" >
                <div className='number text-white rounded bg-dark'>#{id}</div>
                <div className="card-body">
                    <p className="blog-post-meta text-end m-0">{date} {author}</p>
                    <h5 className="card-title">{title}</h5>
                </div>
                <Link to={'' + id} key={id} className='btn btn-outline-dark m-2'>Открыть</Link>
            </div>
        </div>
    );
}

export default Lesson;

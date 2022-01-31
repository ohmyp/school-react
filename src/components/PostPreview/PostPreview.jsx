import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const PostPreview = ({image, title, subtitle, id, date, author}) => {
    const { pathname } = useLocation();
        
    return (
        <div className="col mt-2">
            <div className="card" >
                <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="blog-post-meta text-end m-0">{date} {author}</p>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{subtitle}</p>
                </div>
                <Link to={id} key={id} className='btn btn-outline-dark m-2'>Открыть</Link>
            </div>
        </div>
    );
}

export default PostPreview;

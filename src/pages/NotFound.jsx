import React from 'react';
import { Link } from 'react-router-dom'
const NotFound = () => {
    return (
        <div className='container'>
            <h1>Страница не найдена</h1>
            <Link to={'/'} className='btn btn-primary'>На главную</Link>
        </div>
    );
}

export default NotFound;

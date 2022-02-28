import { Link, useNavigate } from 'react-router-dom'
const NotFound = () => {
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-2)
    }
    
    document.title = "Страница не найдена"

    return (
        <div className='container'>
            <h1>Страница не найдена</h1>
            <Link to={'/'} className='btn btn-primary'>На главную</Link>
            <button onClick={goBack} className='btn btn-primary ms-2'>Назад</button>
        </div>
    );
}

export default NotFound;

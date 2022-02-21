import { TitleCard, Lessons } from '../../components';
import { useState, useEffect } from 'react/cjs/react.development';
import axios from 'axios';

const Tests = () => {

    const [lessons, setLessons] = useState([])
    const [error, setError] = useState(null)
    
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER}/api/profession/tests`)
        .then(
            res => {
                const data = res.data
                setTimeout(() => {setLessons(data)}, 500)},
            err => {setError(err)}
        )
    }, [])

    if (error) {return (<h2 className='container'>{error.message}</h2>)}
    return (
        <div className='container'>
            <TitleCard 
                title={'Профориентация: анкетирование'} 
                subtitle={'Заполняйте анкеты'}
            />
        {
            lessons.length ? <Lessons lessons={lessons}></Lessons> : <h2 className='container'>Загрузка...</h2>
            
        }
            
        </div>
        
    );
}

export default Tests;

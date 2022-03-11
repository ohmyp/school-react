import { TitleCard, Lessons } from '../../components';
import { useSelector } from 'react-redux';

const Tests = () => {
    document.title = `Анкетирование`
    const lessons = useSelector(state => state.lessons.tests)

    return (
        <div className='container'>
            <TitleCard 
                title={'Профориентация: анкетирование'} 
                subtitle={'Заполняйте анкеты'}
            />
        {
            lessons ? <Lessons lessons={lessons}></Lessons> : <h2 className='container'>Загрузка...</h2>
            
        }
            
        </div>
        
    );
}

export default Tests;

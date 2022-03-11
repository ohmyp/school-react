import { TitleCard, Lessons } from '../../components';
import { useSelector } from 'react-redux';

const ProfessionTeachers = () => {
    document.title = `Учителю`
    const lessons = useSelector(state => state.lessons.teachers)

    return (
        <div className='container'>
            <TitleCard 
                title={'Профориентация: для учителя'} 
                subtitle={'Задания для учителя'}
            />
        {
            lessons ? <Lessons lessons={lessons}></Lessons> : <h2 className='container'>Загрузка...</h2>
            
        }
            
        </div>
        
    );
}

export default ProfessionTeachers;

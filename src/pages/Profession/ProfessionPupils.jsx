import { TitleCard, Lessons } from '../../components';
import { useSelector } from 'react-redux';

const ProfessionPupils = () => {
    document.title = `Ученику`
    const lessons = useSelector(state => state.lessons?.pupils)
    if (!lessons) return <div className='container'><h2>Загрузка...</h2></div>

    return (
        <div className='container'>
            <TitleCard 
                title={'Профориентация: для ученика'} 
                subtitle={'Задания для ученика'}
            />
        {
            lessons ? <Lessons lessons={lessons}></Lessons> : <h2 className='container'>Загрузка...</h2>
            
        }
            
        </div>
        
    );
}

export default ProfessionPupils;

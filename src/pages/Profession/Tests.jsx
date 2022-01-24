import React from 'react';
import { TitleCard, Posts } from '../../components';

const posts = [
    {
        id: "klimov",
        title:'Тест на профориентацию по методике Е.А. Климова',
        headText:'Определение типа профессии: профориентационный тест Климова. Этот профориентационный тест поможет определить подходящий вам тип будущей профессии.',
        image:'https://sun9-56.userapi.com/impg/Xf4WNWcvVWz4H4N59ZLEbI2rGmovNbUerYH_-w/zsbRZUC_mA0.jpg?size=275x183&quality=96&sign=f25dab29051dbfddac35964843286970&type=album'
    }
    
]

const Tests = () => {
    return (
        <div className='container'>
            <TitleCard 
                title={'Профориентация: анкеты'} 
                subtitle={'Заполняйте анкеты'}
            />
            <Posts posts={posts}></Posts>
        </div>
        
    );
}

export default Tests;

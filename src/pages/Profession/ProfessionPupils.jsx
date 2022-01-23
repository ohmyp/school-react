import React from 'react';
import { TitleCard, Posts } from '../../components';

const posts = [
    {
        title:'Some title',
        subtitle:'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        buttons:[
            {href: 'aaa', text: 'Открыть'},
            {href: 'aaa', text: 'Открыть'}
        ],
        image:'https://sun9-56.userapi.com/impg/Xf4WNWcvVWz4H4N59ZLEbI2rGmovNbUerYH_-w/zsbRZUC_mA0.jpg?size=275x183&quality=96&sign=f25dab29051dbfddac35964843286970&type=album'
    },
    {
        title:'Some title',
        subtitle:'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        buttons:[
            {href: 'aaa', text: 'Открыть'},
            {href: 'aaa', text: 'Открыть'}
        ],
        image:'https://sun9-56.userapi.com/impg/Xf4WNWcvVWz4H4N59ZLEbI2rGmovNbUerYH_-w/zsbRZUC_mA0.jpg?size=275x183&quality=96&sign=f25dab29051dbfddac35964843286970&type=album'
    },
]

const ProfessionPupils = () => {
    return (
        <div className='container'>
            <TitleCard 
                title={'Профориентация: для ученика'} 
                subtitle={'Задания для ученика'}
            />
            <Posts posts={posts}></Posts>
        </div>
        
    );
}

export default ProfessionPupils;

import { React } from 'react';
import { TitleCard, Posts } from '../components/index';
import { useSelector } from 'react-redux';

const Home = () => {
    document.title = "Единая школа"
    const posts = useSelector(state => state.posts)
    
    return (
        <div className='container'>
            <TitleCard 
                title={'Ищу свой путь'} 
                subtitle={'информационно-образовательная среда'}
            />
            {posts ? <Posts posts={posts}></Posts> : <h2 className='container'>Загрузка...</h2>}
        </div>
    );
}

export default Home;

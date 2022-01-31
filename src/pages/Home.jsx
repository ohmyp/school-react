import { React, useState, useEffect } from 'react';
import { TitleCard, Posts } from '../components/index';
import axios from 'axios'

const Home = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3001/api/posts`)
        .then(res => {
            const data = res.data;
            setPosts(data)
        })
    }, []);
    if (!posts) {return (<div className='container'>Loading</div>)}
    return (
        <div className='container'>
            <TitleCard 
                title={'Ищу свой путь'} 
                subtitle={'портал профориентации, проектной и внеурочной деятельности'}
            />
            <Posts posts={posts}></Posts>
        </div>
    );
}

export default Home;

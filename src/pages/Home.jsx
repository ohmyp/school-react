import { React, useState, useEffect } from 'react';
import { TitleCard, Posts } from '../components/index';
import axios from 'axios'

const Home = () => {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState(null)
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER}/api/posts`)
        .then(
            res => {
                const data = res.data
                setTimeout(() => {setPosts(data)}, 500)},
            err => {setError(err)}
        )
    }, [])

    if (error) {return (<h2 className='container'>{error.message}</h2>)}
    
    else return (
        <div className='container'>
            <TitleCard 
                title={'Ищу свой путь'} 
                subtitle={'портал профориентации, проектной и внеурочной деятельности'}
            />
            {posts.length ? <Posts posts={posts}></Posts> : <h2 className='container'>Загрузка...</h2>}
        </div>
    );
}

export default Home;

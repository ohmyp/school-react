import React from 'react';
import { PostPreview } from '../index';

const Posts = ({posts}) => {
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-sm-1 row-cols-lg-3">
            {posts.map((post, i) =>{
                return <PostPreview
                    title={post.title}
                    subtitle={post.headText.slice(0, 150)+'...'}
                    image={post.image}
                    key={post.title+i}
                    id={post.id}
                    author={post.author}
                    date={post.date}
                />     
            })}    
        </div>
    );
}

export default Posts;

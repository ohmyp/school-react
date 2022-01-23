import React from 'react';
import { CommonCard } from '..';

const Posts = ({posts}) => {
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-sm-1 row-cols-lg-3">
            {posts.map((post, i) =>{
                return <CommonCard
                    title={post.title}
                    subtitle={post.subtitle}
                    buttons={post.buttons}
                    image={post.image}
                    key={i}
                />     
            })}    
        </div>
    );
}

export default Posts;

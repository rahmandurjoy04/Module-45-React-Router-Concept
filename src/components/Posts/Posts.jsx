import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';


const Posts = () => {
    const posts = useLoaderData();
    console.log(posts);
    return (
        <div className='mt-6 ml-34'>
            <h2>Number of Posts:{posts.length}</h2>
            {
                posts.map(post=><Post key={post.id} post={post}></Post>)
            }

        </div>
    );
};

export default Posts;
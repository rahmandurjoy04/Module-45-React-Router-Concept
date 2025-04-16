import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetail = () => {
    const post = useLoaderData();
    console.log(post);
    return (
        <div className='p-2 border rounded ml-42 mr-4 mt-4 bg-blue-300'>
            <h2 className='text-xl py-2 border rounded text-center bg-amber-50'>{post.title}</h2>
            <p className='py-2'>{post.body}</p>
            
        </div>
    );
};

export default PostDetail;
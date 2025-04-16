import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
    const {id,title}=post
    console.log(post);
    return (
        <div className='border my-2 mx-auto rounded p-2'>
            <h2 className='text-xl text-center'>{title}</h2>
            <Link className='flex justify-center' to={`/posts/${id}`}>
            <button className='btn btn-xs btn-info'>Show Details</button>
            </Link>
            
        </div>
    );
};

export default Post;
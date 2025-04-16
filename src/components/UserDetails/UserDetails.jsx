import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    const {website,name}=user
    return (
        <div className='p-4 mt-6 rounded border bg-amber-300'>
            <h2 className='text-xl font-bold mb-3 text-center'>User Details</h2>
            <div className='border rounded p-2 bg-fuchsia-300'>
            <h3>Name:{name}</h3>
            <p>Website:{website}</p>
            </div>

            
        </div>
    );
};

export default UserDetails;
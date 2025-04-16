import React, { Suspense, useState } from 'react';
import { Link, Navigate } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';

const User = ({ user }) => {
    const [showInfo,setShowInfo]=useState(false);
    const [visitHome,setVisitHome]=useState(false);

    console.log(user);
    const { name, email, phone, id } = user;
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res=>res.json());


    if(visitHome){
        return <Navigate to={'/'}></Navigate>
    }

    return (
        <div className='mt-6 border my-2 p-1 rounded'>
            <h3 className='text-center border rounded bg-teal-300'>Name:{name}</h3>
            <p className='text-center'>Email:{email}</p>
            <p className='text-center'>Phone:{phone}</p>
            <div className='flex justify-center gap-2'>
                <Link className='bg-amber-500 rounded py-1 px-1' to={`/users/${id}`}>Show User Details</Link>
                <button onClick={()=>setShowInfo(!showInfo)} className='btn btn-sm btn-accent'>{showInfo?'Hide':'Show'} Info</button>
            </div>
            {
                showInfo && <Suspense fallback={<span>Loading...</span>}>
                    <UserDetails2 key={id} userPromise={userPromise}></UserDetails2>
                </Suspense>
            }

            <div className='flex justify-center pt-1'>
            <button className='btn btn-sm btn-accent ' onClick={()=> setVisitHome(true)}>Visit Home</button>
            </div>
        </div>
    );
};

export default User;
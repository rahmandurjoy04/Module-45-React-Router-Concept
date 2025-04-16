import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';

const Users = () => {
    const users = useLoaderData();
    // console.log(users);
    return (
        <div>
            <h2 className='text-center mt-20'><span className='bg-cyan-600 px-3 py-1 rounded'>This is Users page</span></h2>
            <div>
                {
                    users.map(user=><User key={user.id} user={user}></User>)
                }
            </div>

        </div>
    );
};

export default Users;
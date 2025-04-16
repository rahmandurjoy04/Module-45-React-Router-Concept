import React, { use } from 'react';

const UserDetails2 = ({userPromise}) => {
    const {name,username} = use(userPromise);


    return (
        <div className='p-2 border rounded m-2 bg-amber-50'>
            <p>Name:{name}</p>
            <p>User Name:{username}</p>
            
        </div>
    );
};

export default UserDetails2;
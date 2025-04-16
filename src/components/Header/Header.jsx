import React from 'react';
import { Link, NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
            <h3 className='text-center p-2 bg-cyan-700 text-white text-3xl'>This is Header</h3>
            <nav className='flex justify-center gap-6 mt-4'>
                <NavLink className={`bg-amber-500 px-2 rounded `} to='/'>Home</NavLink>
                <NavLink className='bg-amber-500 px-2 rounded' to='/mobiles'>Mobiles</NavLink>
                <NavLink className='bg-amber-500 px-2 rounded' to='/laptops'>Laptops</NavLink>
                <NavLink className='bg-amber-500 px-2 rounded' to='/users'>Users</NavLink>
                <NavLink className='bg-amber-500 px-2 rounded' to='/posts'>Posts</NavLink>
                {/* <a href="/">Home</a>
                <a href="/mobiles">Mobiles</a>
                <a href="/laptops">Laptops</a> */}
            </nav>
            
        </div>
    );
};

export default Header;
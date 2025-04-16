import React from 'react';

const SideBar = () => {
    return (
        <div>
            <aside className='absolute left-4'>
                <nav className='p-4 bg-stone-300 rounded ml-2 border'>
                    <p>side nav -1</p>
                    <p>side nav -2</p>
                    <p>side nav -3</p>
                    <p>side nav -4</p>
                    <p>side nav -5</p>
                </nav>
            </aside>
        </div>
    );
};

export default SideBar;
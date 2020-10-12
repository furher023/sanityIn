import React from 'react';
import MediaList from './MediaList';

function Blogs(props){
    return(
        <div className='Blogs'>
            <div className='container'>
                <MediaList />
                <MediaList />
                <MediaList />
                <MediaList />
            </div>
        </div>
    )
}

export default Blogs;
import React from 'react';
import MediaList from './MediaList'

function Doctors(props){
    return(
        <div className="doctors">
            <br/>
            <div className='container'>
            <MediaList />
            <MediaList />
            <MediaList />
            </div>
        </div>
    )
}

export default Doctors;
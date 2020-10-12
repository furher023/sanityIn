import React from 'react';
import {Media} from 'reactstrap';

function MediaList(props){
    return(
        <div className="conatiner-fluid" id="blogsHome">
            <Media>
            <Media left top href="#">
                <Media object src="/assets/images/profile.png" alt="Generic placeholder image" />
            </Media>
            <Media body>
                <Media heading>
                 Blog title
                </Media>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </Media>
            </Media>
        </div>
    );
}

export default MediaList;
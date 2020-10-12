import React from 'react';
import ReactPlayer from'react-player';
import {Card,CardBody,CardTitle,CardText,CardSubtitle,CardImg,Media} from 'reactstrap';
import MediaList from './MediaList';

function RenderCards(){

    return(
        <div className='container-fluid' id="doctorsHome">
            <div className='row'>
                <div className='col-lg-4 col-md-12 mr-auto'>
                <Card>
            <CardImg src='/assets/images/profile.png' alt='DoctorImage' />
            <CardBody>
            <CardTitle>Doctor Name</CardTitle>
            <CardSubtitle>Rating</CardSubtitle>
            <CardText>Description</CardText>
            </CardBody>
            </Card>
                </div>
                <div className='col-lg-4 col-md-12 mr-auto'>
                <Card>
            <CardImg src='/assets/images/profile.png' alt='DoctorImage' />
            <CardBody>
            <CardTitle>Doctor Name</CardTitle>
            <CardSubtitle>Rating</CardSubtitle>
            <CardText>Description</CardText>
            </CardBody>
            </Card>
                </div>
                <div className='col-lg-4 col-md-12 mr-auto'>
                <Card>
            <CardImg src='/assets/images/profile.png' alt='DoctorImage' />
            <CardBody>
            <CardTitle>Doctor Name</CardTitle>
            <CardSubtitle>Rating</CardSubtitle>
            <CardText>Description</CardText>
            </CardBody>
            </Card>
                </div>
            </div>
        </div>
    );
}

function RenderBlogs(props){
    return(
        <MediaList />
    );
}

function Home(props){
    return(
        <>
        <div className="jumbotron">
            <div className="container">
                <div className="row">
                    <div id="homeTop" className="col-lg-8 col-md-12 " >
                </div>
            
                <div className='col-lg-4 col-md-12 '>
                    <br />
                    <ReactPlayer url='https://www.youtube.com/watch?v=z5jf1jornm8&t=1758s' width='70' />
                </div>
            </div>
            </div>
        </div>
            <br />
            <RenderCards />
            <hr />
            <br />
            <RenderBlogs />
            <RenderBlogs />
            <RenderBlogs />
        </>
    );
}

export default Home;
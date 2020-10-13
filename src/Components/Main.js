import React,{Component} from 'react';
import Footer from './Footer';
import Header from './Header';
import Home from './Home'
import Doctors from './Doctors';
import Blogs from './Blogs';
import Login from './Login'
import SignInSide from './NewLogin';
import SignUp from './SignUp';
import {Switch,Route,Redirect} from 'react-router-dom';

class Main extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
            <Header />
            <Switch>
                <Route path='/home' component={Home} />
                <Route path='/doctors' component={Doctors} />
                <Route path='/login' component={SignInSide} />
                <Route path='/blogs' component={Blogs} />
                <Route path='/signup' component={SignUp} />
                <Redirect to='/home' />
            </Switch>
            <br />
            <Footer />
            </>
        );
    }

}

export default Main;
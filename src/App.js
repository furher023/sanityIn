import React from 'react';
import 'font-awesome/css/font-awesome.css';
//import 'bootstrap-social/bootstrap-social.css';
import './App.css';
import Main from './Components/Main'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
    
  );
}

export default App;

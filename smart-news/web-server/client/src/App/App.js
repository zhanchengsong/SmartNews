import React, { Component } from 'react';
import logo from '../logo.svg';
import NewsPanel from '../NewsPanel/NewsPanel'
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            {/*<img className='logo' src={logo} alt='logo'/>*/}
            <div className='container'>
                <NewsPanel />
            </div>
        </div>
    );
  }
}

export default App;

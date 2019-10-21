import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About  from './modules/About';
import SearchPhone from './modules/SearchPhone';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route }  from 'react-router-dom';
ReactDOM.render((
    <BrowserRouter>
        <div className='container'>
            <Route exact path='/' component={App} />
            <Route path='/about' component={About} />
            <Route path='/searchphone' component={SearchPhone} />
        </div>
    </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

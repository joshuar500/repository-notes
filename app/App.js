
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import routes from './config/routes';
import { hashHistory } from 'react-router';

ReactDOM.render(
    // which component to render depending on which router we're at
    <Router history={hashHistory}>{routes}</Router>,
    document.getElementById('app')
)
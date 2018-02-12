'use strict';

import MainAppContainer from './components/MainAppContainer';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {rootReducer} from "./store/reducers"

export const ACTION_CHANGE_ARTICLE_TITLE = 'ACTION_CHANGE_ARTICLE_TITLE';
export const ACTION_CHANGE_ARTICLE_CONTENT = 'ACTION_CHANGE_ARTICLE_CONTENT';

export const store = createStore(rootReducer);

window.onload = function() {
    ReactDOM.render(<MainAppContainer
        title="Test React Application"
        author="Oleksii Sapon"
        authorEmail="asapon@freeconferencecall.com"
        year="2018"
    />, document.getElementById('root'));
};

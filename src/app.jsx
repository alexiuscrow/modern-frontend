'use strict';

import Article from './article/index.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

window.onload = function() {
    ReactDOM.render(<Article title="Title" content="Lorem ipsum"/>, document.getElementById('root'));
};

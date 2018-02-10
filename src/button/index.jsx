'use strict';

import React from 'react';
import './styles.scss'

export default class Button extends React.Component {
    render() {
        return <button className="button">{this.props.text}</button>
    }
}
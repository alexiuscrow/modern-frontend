'use strict';

import React from 'react';
import Button from '../button/index.jsx';
import './styles.scss'

export default class Article extends React.Component {
    state = {
        isOpen: false
    };

    handleClick = () => {
        console.log("-- WORKS");
        // this.setState({
        //     isOpen: !this.state.isOpen
        // });

        // this.setState((prevState, props) => ({ isOpen: !prevState.isOpen }));
    };

    render() {
        let content = this.state.isOpen && this.props.content;
        let buttonText = this.state.isOpen ? 'Close' : 'Open';
        return (
            <div>
                <h2>{this.props.title}</h2>
                <Button onClick={ this.handleClick } text={buttonText}/>
                <article>{content}</article>
            </div>
        )
    }
}
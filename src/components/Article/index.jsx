'use strict';

import React from 'react';
import Button from '../Button/index.jsx';
import {connect} from 'react-redux';
import './styles.scss'

export class Article extends React.Component {
    state = {
        isOpen: false
    };

    handleClick = () => {
        this.setState((prevState, props) => ({ isOpen: !prevState.isOpen }));
    };

    render() {
        const { articleTitle, articleContent } = this.props;
        const content = this.state.isOpen && articleContent;
        const buttonText = this.state.isOpen ? 'Collapse' : 'Expand';

        return (
            <div className="article">
                <h2>{articleTitle}</h2>
                <Button onClick={ this.handleClick } text={buttonText}/>
                <article>{content}</article>
            </div>
        )
    }
}

const putStateToProps = (state) => {
    return {
        articleTitle: state.articleTitle,
        articleContent: state.articleContent
    }
};

export default connect(putStateToProps)(Article)
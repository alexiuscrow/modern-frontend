'use strict';

import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './styles.scss'
import {changeArticleTitle, changeArticleContent} from '../../store/actions'

export class ArticleEditor extends React.Component {
    render() {
        const { articleTitle, articleContent, changeArticleTitle, changeArticleContent } = this.props;

        return (
            <div className="article-editor">
                <input type="text" value={articleTitle} placeholder="Article title"
                       onChange={(event) => {changeArticleTitle(event.target.value)}} autoFocus/>
                <textarea name="article-content" value={articleContent} placeholder="Article content"
                          onChange={(event) => {changeArticleContent(event.target.value)}}/>
            </div>
        );
    }
}

const putStateToProps = (state) => {
    return {
        articleTitle: state.articleTitle,
        articleContent: state.articleContent
    }
};

const putActionsToProps = (dispatch) => {
    return {
        changeArticleTitle: bindActionCreators(changeArticleTitle, dispatch),
        changeArticleContent: bindActionCreators(changeArticleContent, dispatch)
    }
};

export default connect(putStateToProps, putActionsToProps)(ArticleEditor)
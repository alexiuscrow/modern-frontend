'use strict';

import { ACTION_CHANGE_ARTICLE_TITLE, ACTION_CHANGE_ARTICLE_CONTENT } from '../app'

export const changeArticleTitle = (newArticleTitle) => {
    return {
        type: ACTION_CHANGE_ARTICLE_TITLE,
        payload: newArticleTitle
    };
};

export const changeArticleContent = (newArticleContent) => {
    return {
        type: ACTION_CHANGE_ARTICLE_CONTENT,
        payload: newArticleContent
    };
};
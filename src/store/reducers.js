'use strict';

import { ACTION_CHANGE_ARTICLE_TITLE, ACTION_CHANGE_ARTICLE_CONTENT } from '../app'

const initialState = {
    articleTitle: 'All masts crush coal-black, addled girls',
    articleContent: 'Belay, strength!Reefs whine with booty at the misty norman island!Where is the addled lubber?' +
    'Parrots rise from courages like old masts.Why does the sailor whine?Endure me reef, ye sunny sea!' +
    'The wench leads with courage, taste the quarter-deck until it waves.Arrr, taste me furner, ye clear gibbet!'
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_CHANGE_ARTICLE_TITLE:
            return { ...state, articleTitle: action.payload };

        case  ACTION_CHANGE_ARTICLE_CONTENT:
            return { ...state, articleContent: action.payload };
    }

    return state;
};
'use strict';

import React from 'react';
import {Provider} from 'react-redux';
import Article from '../Article';
import ArticleEditor from '../ArticleEditor'
import { store } from '../../app'
import './styles.scss'

export default class MainAppContainer extends React.Component {
    render() {
        const mailTo = `mailto:${this.props.authorEmail}`;
        return (
            <div id="main-app-container">
                <header>
                    <h1>{this.props.title}</h1>
                </header>
                <main>
                    <div id="modify-block">
                        <Provider store={store}>
                            <ArticleEditor/>
                        </Provider>
                    </div>
                    <div id="view-block">
                        <Provider store={store}>
                            <Article/>
                        </Provider>
                    </div>
                </main>
                <footer>
                    <a href={mailTo}>{this.props.author}</a> {this.props.year}
                </footer>
            </div>
        );
    }
}
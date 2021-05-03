import ReactDOM from 'react-dom';
import React from 'react';
import { App } from './modules/app';

const root = document.getElementById('root');
const app = React.createElement(App);

function linkReactToDOM(anchor: HTMLElement) {
    if (anchor.innerHTML) {
        ReactDOM.hydrate(app, anchor);
    } else {
        ReactDOM.render(app, anchor);
    }
}

if (root) {
    linkReactToDOM(root);
} else {
    throw new Error('Root element not found');
}

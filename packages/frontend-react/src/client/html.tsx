import React from 'react';
import ReactDOMServer from 'react-dom/server';

const Html: React.FunctionComponent = () => (
    <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
            />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <title>Document</title>
        </head>
        <body>
            <div id="root" />
            <div>Hello from static markup!</div>
            <script src="/static/client.js" />
            <noscript>This site needs JavaScript</noscript>
        </body>
    </html>
);

export const staticHTML = `<!doctype html>${ReactDOMServer.renderToStaticMarkup(<Html />)}`;

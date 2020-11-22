import http from 'http';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import  {StaticRouter, matchPath} from 'react-router-dom';

import App from '../src/App';
import Routes from "../src/routes";

http.createServer( (req, res) => {

    const promises = [];

    Routes.some(route => {
        const match = matchPath(req.url, route);
        if (match && route.loadData) {
            promises.push(route.loadData());
        }
    })
    Promise.all(promises).then(datas => {

        const data = datas[0];
        const context = {data};
        const html = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={context}>
                <App />
            </StaticRouter>);
        if (context.status === 404) {
            //
        }

        if (context.url) {
            res.writeHead(301, {
                Location: context.url
            });
            res.end();
        } else {
            res.write(`<!doctype html> <div id="app">${html}</div>`);
            res.end();
        }
    })
}).listen(3000);
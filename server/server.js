import express from 'express';
import bodyParser from 'body-parser';
import webpackMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';

import webpackConfig from '../webpack.config';

const app = express();

app.use(
    webpackMiddleware(
        webpack(webpackConfig)
    )
);

export default app;
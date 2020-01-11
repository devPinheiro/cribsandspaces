import express from 'express';
import logger from 'morgan';
import Webpack from 'webpack';
import path from 'path'; 
import webpackConfig from '../webpack.config';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';

const app = express();
const PORT = process.env.PORT || 3500;

app.use(logger('dev'));

const compiler = Webpack(webpackConfig);


app.use(
  WebpackDevMiddleware(compiler, {
      hot: true,
      publicPath: webpackConfig.output.publicPath
  })
);

app.use(WebpackHotMiddleware(compiler));

// middleware
app.use(express.json());


app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, '../dist/index.html'))
);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.message = 'Invalid route';
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
});

// export app for testing
export default app

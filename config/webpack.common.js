const fs = require('fs'); // to check if the file exists
const path = require('path'); // to get the current path
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');
const LoadablePlugin = require('@loadable/webpack-plugin');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;


const distDir = path.resolve(__dirname, '../build');
const srcDir = path.resolve(__dirname, '../src');
const publicDir = path.resolve(__dirname, '../public');
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = (env) => {
  
  // Get the root path (assuming your webpack config is in the root of your project!)
  const currentPath = path.join(__dirname);
  
  // Create the fallback path (the production .env)
  const basePath = currentPath + '/.env';

  // We're concatenating the environment name to our filename to specify the correct env file!
  const envPath = basePath + '.' + env.ENVIRONMENT;

  // Check if the file exists, otherwise fall back to the production .env
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;

  // Set the path parameter in the dotenv config
  const fileEnv = dotenv.config({ path: finalPath }).parsed;
  
  // Reduce it to a nice object, the same as before
  const envKeys = !fileEnv ? {} : Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});
  
  return {
    // the app entry point is /src/index.js
    entry: path.resolve(srcDir, 'index.js'),
    output: {
      // the output of the webpack build will be in /dist directory
      path: distDir,
      // the filename of the JS bundle will be bundle.js
      filename: 'bundle.js',
      publicPath: '/'
      // publicPath: '/app/'
    },
    module: {
      rules: [
        { 
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
              getCustomTransformers: () => ({ before: [styledComponentsTransformer] })
          }
        },
        {
        // for any file with a suffix of js or jsx
        test: /\.jsx?$/,
        // ignore transpiling JavaScript from node_modules as it should be that state
        exclude: /node_modules/,
        // use the babel-loader for transpiling JavaScript to a suitable format
        loader: 'babel-loader',
        // options: {
        //   // attach the presets to the loader (most projects use .babelrc file instead)
        //   presets: ["@babel/preset-env", "@babel/preset-react"]
        // }
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
          }
        }
      },
      {
        test: /\.(png|jp(e*)g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader:'@svgr/webpack'
          },
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
            }
          }
        ]
      }
      ]
    },
    resolve: {
        extensions: ['.tsx', '.ts','.js', '.jsx']
    },
    // add a custom index.html as the template
    plugins: [
      new LoadablePlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(publicDir, 'index.html'),
        title: process.env.REACT_APP_NAME,
        scriptLoading:'defer',
        inject:true
      }),
      new webpack.DefinePlugin(envKeys)
    ]
  }
};
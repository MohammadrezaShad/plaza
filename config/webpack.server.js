const nodeExternals = require('webpack-node-externals');
const fs = require('fs'); // to check if the file exists
const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');


const srcDir = path.resolve(__dirname, '../src');
const distDir = path.resolve(__dirname, '../build');

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
        entry: path.resolve(srcDir, 'server/index.js'),
        target: 'node',
        mode:'production',
        output: {
            // the output of the webpack build will be in /dist directory
            path: distDir,
            // the filename of the JS bundle will be bundle.js
            filename: 'server.js',
            publicPath: '/'
            //publicPath: '/app/'
        },
        externals: [nodeExternals()],
        module: {
        rules: [
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
            extensions: ['.js', '.jsx']
        },
        plugins: [
            new webpack.DefinePlugin({
                __isServer__: "true"
            }),
            new webpack.DefinePlugin(envKeys)
        ]
    }
}
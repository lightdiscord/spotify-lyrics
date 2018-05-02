import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
    mode: 'development',
    entry: {
        app: ['./src/index.js'],
    },
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        hot: true
    },
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/build/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html')
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            loaders: [
                'style-loader',
                'css-loader',
                'postcss-loader?browsers=last 2 version'
            ]
        }, {
            test: /\.html$/,
            loaders: [
                'raw-loader'
            ]
        }]
    }
}

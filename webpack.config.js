/**
 * Created by yarivkatz on 22/11/2017.
 */

var path = require('path');

module.exports = {

    entry: './entry.js',

    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader'}
        ]
    }

}
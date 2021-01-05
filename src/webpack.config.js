import { resolve as _resolve } from 'path';
export const entry = _resolve(__dirname, 'src', 'index.jsx');
export const output = {
    filename: 'bundle.js',
    path: _resolve(__dirname, 'dist'),
};
export const mode = 'development';
export const resolve = {
    extensions: ['.js', '.jsx'],
};
export const module = {
    rules: [
        {
            test: /\.css$/,
            loader: 'css-loader',
            options: {
                modules: {
                    localIdentName: '[path][name]__[local]--[hash:base64:5]',
                },
            },
        },
    ],
};

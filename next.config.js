const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type {import('next').NextConfig} */

const nextConfig = {
    basePath: "/github-pages",
    output: "export",
    typescript: {
        ignoreBuildErrors: true
    },
    // webpack: (config, { isServer }) => {
    //     // Your custom Webpack configuration
    //     config.mode = 'development';
    //     config.entry = {
    //       app: './src/index.tsx'
    //     };
    //     config.output = {
    //       filename: 'bundle.[hash].js',
    //       path: path.resolve(__dirname, 'dist')
    //     };
    //     config.resolve.extensions = ['.ts', '.tsx', '.js', '.jsx'];
    //     config.module.rules.push({
    //       test: /\.tsx?$/,
    //       loader: 'ts-loader'
    //     });
    //     config.plugins.push(
    //       new HtmlWebpackPlugin({
    //         template: './src/index.html'
    //       })
    //     );
    
    //     return config;
    //   }
}

module.exports = nextConfig

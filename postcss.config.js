module.exports = {
    syntax: 'postcss-scss',
    plugins: [
        require('postcss-nested'),
        require('autoprefixer'),
        require('postcss-pxtorem')
    ],
};
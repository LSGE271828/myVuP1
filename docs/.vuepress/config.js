module.exports = {
    title: '233',
   port:8999,
    description: '',
    dest: './static/',
    serviceWorker: true,
    evergreen: true, 
    plugins: {
        '@vutex/math': {},},
    configureWebpack: {
        module: {
            rules: [{
                test: /\.ts$/,
                use: 'ts-loader',
            }],
        },
        resolve: {
            extensions: ['.ts'],
        },
    },
};

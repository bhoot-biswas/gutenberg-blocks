let mix = require('laravel-mix');

mix.sass('public/src/sass/block.scss', 'public/css')
.react('public/src/js/block.js', 'public/js')
.setPublicPath('public');

mix.webpackConfig({
    externals: {
        jquery: 'jQuery'
    }
});

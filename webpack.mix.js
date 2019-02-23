let mix = require('laravel-mix');

mix.sass('public/src/sass/gutenberg-blocks-public.scss', 'public/css')
.sass('public/src/sass/blocks/section/editor.scss', 'public/css/blocks/section')
.sass('public/src/sass/blocks/section/style.scss', 'public/css/blocks/section')
.sass('blocks/testimonials/src/block.scss', 'blocks/testimonials')
.react('public/src/js/gutenberg-blocks-public.js', 'public/js')
.react('public/src/js/blocks/section/block.js', 'public/js/blocks/section')
.react('blocks/testimonials/src/block.js', 'blocks/testimonials')
.setPublicPath('/');

mix.webpackConfig({
    externals: {
        jquery: 'jQuery'
    }
});

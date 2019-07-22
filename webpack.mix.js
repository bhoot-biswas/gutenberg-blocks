let mix = require('laravel-mix');

mix
.sass( 'public/src/sass/gutenberg-blocks-public.scss', 'public/css')
.sass( 'public/src/sass/blocks/section/editor.scss',   'public/css/blocks/section')
.sass( 'public/src/sass/blocks/section/style.scss',    'public/css/blocks/section')
.sass( 'blocks/testimonials/src/block.scss',           'blocks/testimonials')
.react('public/src/js/gutenberg-blocks-public.js',     'public/js')
.react('public/src/js/blocks/section/block.js',        'public/js/blocks/section')
.react('blocks/testimonials/src/block.js',             'blocks/testimonials')
.sass( 'blocks/tabs/style.scss',                       'blocks/tabs')
.sass( 'blocks/tabs/editor.scss',                      'blocks/tabs')
.react('blocks/tabs/block.jsx',                        'blocks/tabs')
.sass( 'blocks/tab/style.scss',                       'blocks/tab')
.sass( 'blocks/tab/editor.scss',                      'blocks/tab')
.react('blocks/tab/block.jsx',                        'blocks/tab')
.sass( 'blocks/media-text/style.scss',                       'blocks/media-text')
.sass( 'blocks/media-text/editor.scss',                      'blocks/media-text')
.react('blocks/media-text/block.jsx',                        'blocks/media-text')
.sass( 'blocks/media-text-video/style.scss',                       'blocks/media-text-video')
.sass( 'blocks/media-text-video/editor.scss',                      'blocks/media-text-video')
.react('blocks/media-text-video/block.jsx',                        'blocks/media-text-video')
.sass( 'blocks/wrapper/style.scss',                       'blocks/wrapper')
.sass( 'blocks/wrapper/editor.scss',                      'blocks/wrapper')
.react('blocks/wrapper/block.jsx',                        'blocks/wrapper')
.setPublicPath('/');

mix.webpackConfig({
    externals: {
        jquery: 'jQuery'
    }
});

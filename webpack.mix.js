const mix = require('laravel-mix');

mix.js('resources/javascript/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css');
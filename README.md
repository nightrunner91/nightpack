<div align="center">
  <img width="200" height="200" src="src/assets/logo.png">
  <h1>Nightrunner's Front-end Boilerplate</h1>
  <p>Webpack based simple and pretty boilerplate for Front-end developement</p>
</div>

## How to use it?

Clone repo and install dependencies
```
git clone git@github.com:nightrunner91/nightpack.git
npm i
```
Run hot-reload dev server
```
npm run watch
```
Build your project
```
npm run build
```

## Features included:

- Hot reload server
- PUG
- SASS (with PostCSS autoprefixer)
- Flex Grid
- Normalize.css
- Babel
- jQuery (optional)
- Images loader
- SVG Inline base64 loader
- SVG Sprite loader
- Favicon generator

## Documentation
- [PUG Templates](#pug-templates)
- [SASS Structure](#sass-structure)
- [Grid system](#grid-system)
- [Javascript structure](#javascript-structure)
- [Images loader](#images-loader)
- [SVG Inline loader](#svg-inline-loader)
- [SVG Sprite](#svg-sprite)
- [Favicon generator](#favicon-generator)

### `PUG Templates`

```
views
  ├── blocks
      ├── _header.pug
      ├── _footer.pug
      ├── etc...
  ├── core
      ├── _fonts.pug
      ├── _meta.pug
  └── elements
      ├── _button.pug
      ├── etc...
  _mixins.pug
  index.pug
```
It uses PUG mixins to construct flexible pages. You can use use [index.pug](src/views/index.pug) as an example.
```
include _mixins

- var foo = 'foo'

doctype html
html(lang='en')

  head
    +meta
    +fonts

  body

    +header
    
    main.main
      +hero(param1, param2)
      +carousel(param)
      +section(foo)
      // etc...

    +footer
```
File [_mixins.pug](src/views/_mixins.pug) includes all blocks and elements which template will use. See [PUG documentation](https://pugjs.org/language/mixins.html) for more details. I personally use [BEM methodology](https://en.bem.info/methodology/css/) thats why I separated **B**locks and  **E**lements in different folders.

Don't forget to add new pages in [webpack.config.js](webpack.config.js) file. See [html-webpack-plugin documentation](https://github.com/jantimon/html-webpack-plugin) for more details.
```
// Index.html
new HtmlWebPackPlugin({
  template: "./src/views/index.pug",
  filename: "./index.html"
}),
```
### `SASS structure`
Just like in PUG Templates I use [BEM methodology](https://en.bem.info/methodology/css/) to separate **B**locks and **E**lements. Default file structure looks lke this:
```
styles
  ├── animations
      └── _animations.sass
  ├── blocks
      ├── _header.sass
      ├── _footer.sass
      ├── etc...
  ├── core
      ├── _colors.sass
      ├── _extends.sass
      ├── _grid.sass
      ├── _mixins.sass
      ├── _normalize.sass
      ├── _typography.sass
  └── elements
      ├── _button.sass
      ├── etc...
  main.sass
```
I use [SASS @extends](https://sass-lang.com/documentation/at-rules/extend) feature very often, thats why I included many useful shortenings in [_extends.sass](src/styles/core/_extends.sass) file. 

Output css files will include all needed prefixes thanks to PostCSS loder. You can configure which ones loader will apply in [package.json](package.json#L37) file. See [documentation](https://github.com/postcss/postcss-loader) for more details. 
```
"browserslist": [
  "defaults",
  "not ie < 11",
  "last 2 versions",
  "> 1%",
  "iOS 7",
  "last 3 iOS versions"
]
```

### `Grid system`

It uses custom 12 column grid system based on flex. Actually, you can modify number of columns. For example, 24 or 36 depends on project you work on. You can use grid system both in PUG or SASS. I personally prefer SASS method because in that case output HTML looks pretty and clean.

**PUG**:
```
.col.lg-6.md-6.sm-6.xs-6.mb-12
// or
div(class='col lg-6 md-6 sm-6 xs-6 mb-12')
```
**SASS**:
```
.classname
  @extend .col
  @extend .lg-6
  @extend .md-6
  @extend .sm-6
  @extend .xs-6
  @extend .mb-12
```
It also includes list of popular breakpoints:
```
$mb-screen: 320px !default // mobile (mobile portrait)
$xs-screen: 480px !default // extra small (mobile landscape)
$sm-screen: 648px !default // small
$md-screen: 960px !default // medium
$lg-screen: 1140px !default // large 
$xl-screen: 1600px !default // extra large
```
With this, you can use @media queries like this:
```
@media #{$lg-up} // styles will apply on LG+ resolutions (>1140px)
@media #{$sm-dw} // styles will apply on SM- resolutions (<648px)
@media #{md-lg} // styles will apply between MD and LG resolutions only (>960px && <1140px)
```
See [_grid.sass](src/styles/core/_grid.sass) file for more details

### `Javascript structure`

I prefer to separate my own JS code in modules and then import them in one file. Default file structure looks like this:
```
scripts
  ├── plugins
      ├── _plugin-1.js
      ├── _plugin-2.js
      ├── _plugin-3.js
      ├── etc...
  app.js
```
```
// Import my plugins
import plugin1 from './plugins/_plugin-1.js';
import plugin2 from './plugins/_plugin-2.js';
import plugin3 from './plugins/_plugin-3.js';

// Import external plugins
import owlcarousel from 'owlcarousel';  // (as an example)

document.addEventListener('DOMContentLoaded', function(){
  // Call my plugins
  plugin1(param1, param2);
  plugin2(param1);
  plugin3()

  // Call external plugins
  owlcarousel() // (as an example)

  // Success notification
  console.log('%c app ready ', 'background: yellow; color: black')
});
```
### `Images loader`

It uses [File Loader](https://webpack.js.org/loaders/file-loader/) to serve images from `/assets` folder. After build all images will be in `/images` folder.

**PUG**:
```
img(src='../assets/logo.png' alt='')
```
**SASS**:
```
background-image: url(../assets/logo.png)
```
Output will look something like this:

**HTML**:
```
<img src='images/logo.png' alt=''>
```
**CSS**:
```
background-image: url(images/logo.png);
```
### `SVG Inline loader`

⚠ **You will need to define which method you will use to serve SVG icons — inline or sprite. You can't use both at the same time!**

It uses [svg-url-loader](https://github.com/bhovhannes/svg-url-loader) to inject SVG icons directly in HTML/CSS as base64 data url. It's by far my favourite method to work with static svg icons, because browser won't make an extra http call to download the image and even if image is in browser cache images with data url appear on screen faster (see [this page](https://github.com/bhovhannes/svg-url-loader/issues/341)). 

Usage is similar to Images loader:

**PUG**:
```
img(src='../assets/logo.svg' alt='')
```
**SASS**:
```
background-image: url(../assets/logo.svg)
```
Output will look something like this:

**HTML**:
```
<img src='data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M0 0v32h32V0H0zm21.2 8.8h-2.5c-.5 0-1 .5-1 .9v2.5h3.5c-.1 1.9-.4 3.7-.4 3.7h-3.1V27h-4.6V16h-2.3v-3.7h2.3V9.2c0-.5-.1-4.3 4.7-4.3h3.4v3.9z' fill='%23c15143'/%3E%3C/svg%3E' alt=''>
```
**CSS**:
```
background-image: url(data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M0 0v32h32V0H0zm21.2 8.8h-2.5c-.5 0-1 .5-1 .9v2.5h3.5c-.1 1.9-.4 3.7-.4 3.7h-3.1V27h-4.6V16h-2.3v-3.7h2.3V9.2c0-.5-.1-4.3 4.7-4.3h3.4v3.9z' fill='%23c15143'/%3E%3C/svg%3E);
```
Of course it's not the only method you can use to serve SVG icons. Besides, sometimes it's not handly. That's why I also use SVG sprite as my second favourite method 😉

### `SVG Sprite`

It uses [SVG sprite loader](https://github.com/JetBrains/svg-sprite-loader) to serve SVG icons aswell. To use this method instead of SVG Inline loader you will need to uncomment these lines of code in [webpack.config.js](webpack.config.js) file:

```
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

rules: [
  {
    test: /\.svg$/,
    use: [
      { loader: 'svg-sprite-loader', options: {} },
      { loader: 'svgo-loader', options: {
        plugins: [
          {removeTitle: true},
          {convertColors: {shorthex: false}},
          {convertPathData: false}
        ]
      }}
    ]
  }
],

plugins: [
  new SpriteLoaderPlugin()
]
```
And comment or remove SVG inline loader settings:
```
{
  test: /\.svg/,
  use: [
    { loader: 'svg-url-loader', options: {} },
    { loader: 'svgo-loader', options: {
      plugins: [
        {removeTitle: true},
        {convertColors: {shorthex: false}},
        {convertPathData: false}
      ]
    }}
  ]
},
```

This method will allow you to use SVG icons from authomaticaly generated SVG sprite mounted to `<body>`. First, you will need to import icon in [index.js](src/index.js) like this:

```
import "./assets/icon.svg"
```
And then insert it to PUG file like this:
```
svg: use(xlink:href='#icon')
```
Of course you can configure loader as you want, but I found this method most usefull and simple. 

And as you can mention, both methods uses [SVGO Loader](https://github.com/rpominov/svgo-loader) to optimize SVG icons. You can read more about this in [SVGO documentation](https://github.com/svg/svgo#what-it-can-do). 

### `Favicon generator`

Just write path to target image in [webpack.config.js](webpack.config.js#118) and [Favicons Webpack Plugin](https://github.com/jantimon/favicons-webpack-plugin) will do the rest! 
```
// Favicons generator
new FaviconsWebpackPlugin({
  logo: './src/assets/logo.png',
  prefix: 'favicons/'
})
```

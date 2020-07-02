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

- PUG
- SASS (with PostCSS autoprefixer)
- Normalize.css
- Babel
- Hot reload server
- Favicon generator
- SVG inline loader
- Images loader

### Templates

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
File [_mixins.pug](src/views/_mixins.pug) includes all types of blocks which template will use. See [PUG documentation](https://pugjs.org/language/mixins.html) for more details.
```
//- Core
include core/_meta
include core/_fonts

//- Components

//- Sections
include sections/_header
include sections/_footer
```
Don't forget to add new pages in [webpack.config.js](webpack.config.js) file. See [html-webpack-plugin documentation](https://github.com/jantimon/html-webpack-plugin) for more details.
```
// Index.html
new HtmlWebPackPlugin({
  template: "./src/views/index.pug",
  filename: "./index.html"
}),
```

### Grid system

It uses custom 12 column grid system based on flex. You can use it both in PUG or SASS. I personally prefer SASS method because output HTML looks pretty and clean.
```
div.col.lg-6.md-6.sm-6.xs-6.mb-12
```
```
.classname
  @extend .col
  @extend .lg-6
  @extend .md-6
  @extend .sm-6
  @extend .xs-6
  @extend .mb12
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
@media #{md-lg} // styles will apply between MB and LG resolutions only (>960px && <1140px)
```
See [_grid.sass](src/styles/core/_grid.sass) file for more details

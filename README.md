# Nightrunner's Front-end Boilerplate

**Webpack based simple and pretty boilerplate for Front-end developement**

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
- Babel
- Hot reload server
- Favicon generator
- SVG inline loader
- Images loader

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
@media #{mb-lg} // styles will apply between MB and LG resolutions only (>320px && <1140px)
```
See [_grid.sass](src/styles/core/_grid.sass) file for more details

<div align="center">
  <img width="200" height="200" src="src/assets/logo-wp.png"> 
  <img width="200" height="200" src="src/assets/logo-sn.png">
  <h1>Nightrunner's Webpack Front-end Boilerplate</h1>
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
- SASS/SCSS (with PostCSS autoprefixer)
- Flex Grid
- Normalize.css
- Babel
- jQuery (optional)
- Images loader
- SVG Sprite loader
- Favicon generator

## Grid

By default nightpack uses custom 12 column grid system based on flex. 

Standart breakpoints, minimal container width, number of columns and gap between them can be modified. You can add new breakpoints too, if standart set don't fit your needs.
```
$num-cols:           12;
$gutter-width:       1rem;
$container-width:    1140px;

$breakpoints: (
  'xs': 576,
  'sm': 768,
  'md': 1024,
  'lg': 1200,
  'xl': 1440,
);
```
You can use grid system both in PUG or SCSS. It depends only on your personal preferences.

**PUG:**
```
div(class="col xl-8 lg-6 md-6 sm-10 xs-12 col-12")
```
**SCSS:**
```
div {
  @extend .col;
  @extend .xl-8;
  @extend .lg-6;
  @extend .md-6;
  @extend .sm-10;
  @extend .xs-12;
  @extend .col-12;
}
```

There are prepared media queries for SCSS usage:

```
$xs-sm // between 576px and 768px
$sm-md // between 768px and 1024px
$md-lg // between 1024px and 1200px
$lg-xl // between 1200px and 1440px

$xs-up // above 576px
$sm-up // above 768px
$md-up // above 1024px
$lg-up // above 1200px
$xl-up // above 1440px

$xs-dw // below 576px
$sm-dw // below 768px
$md-dw // below 1024px
$lg-dw // below 1200px
$xl-dw // below 1440px
```

Here are some examples of usage:

```
@media #{$lg-up} // styles will apply above 1200px
@media #{$sm-dw} // styles will apply below 768px
@media #{md-lg} // styles will apply between 1024px and 1200px
```
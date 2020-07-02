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

It uses custom 12 column grid system based on flex. You can use it in pug/html or in css
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
 

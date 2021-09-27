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
- SASS (with PostCSS autoprefixer)
- Flex Grid
- Normalize.css
- Babel
- jQuery (optional)
- Images loader
- SVG Inline base64 loader
- SVG Sprite loader
- Favicon generator

## Grid

By default nightpack uses 12 columns flex based grid. 

Standart breakpoints are:
```
$breakpoints: (
  'xs': 576,
  'sm': 768,
  'md': 1024,
  'lg': 1200,
  'xl': 1440,
);
```
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

## `Building project`

When you finished, just run `npm run build`. Output file structure looks like this:

```
dist
  ├── favicons
      ├── favicon.ico
      ├── etc...
  ├── images
      ├── _image-1.png
      ├── _image-2.png
      ├── _image-3.jpg
      ├── etc...
  index.html
  main.css
  main.js
```

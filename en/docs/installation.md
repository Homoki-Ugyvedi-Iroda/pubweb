# Installation

## Install npm packages

Install the `npm` packages described in the `package.json`:

`npm install`

## npm scripts

These are the most useful commands defined in `package.json`:

- `npm run start` - Run development server in watch mode.
- `npm run build` - Build production files.
- `npm run watch` - Run in tests in watch mode.
- `npm run clean` - Delete `_site` folder.

## Other scripts

These are the other commands in `gulpfile.js`:

- `gulp` - Run development server in watch mode as `npm run start`.
- `gulp build` - Build production files as `npm run build`.
- `gulp watch` - Run in tests in watch mode as `npm run watch`.
- `gulp scss` - Compile CSS/SCSS partials to `main.min.css` file.
- `gulp js` - Compile JS partials to `main.min.js` file.

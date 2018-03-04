# ![atelierul-tau](assets/logo.png)

## Setup

You'll need to install [Node.js](https://nodejs.org/en/), you can use the `v6.11.0` or above. Then open up a console (Terminal, iTerm, PowerShell, etc.) and install the depencencies for this project.

```sh
npm install
```

## How to run

### Locally

```sh
# Start the dev server with live reload
# on http://localhost:8080
npm start
```

### Build assets for upload

```sh
# Build the static assets for upload.
# They'll be put in the /build folder.
npm run build
```
If you make a commit with the generated files and push it to GitHub then that will also update the [live version](https://radvalentin.github.io/atelierul-tau/build/index.html).

## Development

### Tech used

[Pug](http://pugjs.org) (formerly Jade) for HTML layout, you can check out the official [language reference](https://pugjs.org/api/getting-started.html) to see how it works. <br/>
If you find the syntax too heavy, you can also just write plain HTML and run it through a [converter](http://html2jade.org/) when you're happy with your code.

[Bootstrap 4](https://v4-alpha.getbootstrap.com/) with our own custom overrides in [`global.scss`](sass/global.scss). The idea is to customize and use as much of the existing components as possible.

### How to create a new page

1. Create `pug/my_page.pug` and `sass/my_page.scss`
2. Import your page styles in `sass/main.scss`, this is where we require all sass files for the final build ATM. `@import './my_page.scss'`
3. Your page must have `header` and `footer` elements
```pug
doctype html
html(lang='ro')
include head.pug
body
  include header.pug
  <!-- you code --->
  include footer.pug
```
4. Make webpack compile your page by adding a new entry under `plugins` in [`webpack.config.js`](webpack.config.js#L67)
```js
new HtmlWebpackPlugin({
  filename: "my_page.html",
  template: "pug/my_page.pug"
}),
```
5. Finally, the page should be listed in the main menu. In [`pug/index.pug`](pug/index.pug) add a link to it
```pug
a.list-group-item.list-group-item-action(href="my_page.html") My Page
```

### What's an atom?

Very small UI elements (<20 lines of pug) that are used in multiple places are good candidates for being an atom.

It's best to just write your pug and styles in a single place and split up into atoms when you need to use the same thing somewere else.

## Things to keep in mind

1. Carousel images should have a size of `1050px x 277px` for best results
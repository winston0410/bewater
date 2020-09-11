# Be water

**Be water, be fluid, be responsive.**

A PostCSS plugin that helps you automatically apply `clamp()` to values to achieve a fluid design efficently.

**This project is not completed yet**

```css
/* Before transformation */
p{
  font-size: 30px;
  padding: 15px;
}

```

```css
/* After transformation */
p{
  font-size: clamp(30px, 4vw, 45px);
  padding: 15px;
}

```

## Installation

This plugin require you to use [PostCSS Sparrow](https://www.npmjs.com/package/postcss-sparrow) for matching with selectors you want.

Download both `postcss-sparrow` and this plugin through NPM.

```shell

npm i postcss-sparrow bewater

```

Then import this plugin as the callback for [PostCSS Sparrow](https://www.npmjs.com/package/postcss-sparrow).

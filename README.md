# Be water

**Be water, be fluid, be responsive.**

A PostCSS plugin that helps you automatically apply `clamp()` to values to achieve a fluid design efficently.

This plugin uses [PostCSS Sparrow](https://www.npmjs.com/package/postcss-sparrow), [PostCSS Sparrow Units Filter](https://www.npmjs.com/package/postcss-sparrow-units-filter) and [PostCSS Sparrow Props Filter](https://www.npmjs.com/package/postcss-sparrow-props-filter) under the hood for filtering CSS declarations.

```css
/* Before transformation */
p {
  font-size: 30px;
  padding: 15px;
}

```

```javascript
//postcss.config.js
module.exports = {
  plugins: [
    //Other plugins...

    require('postcss-sparrow')({
      transformations: [
        {
          selectors: ['*'],
          inclusion: true,
          callbacks: [
            require('bewater')(
              {
                props: {
                  props: ['font-size'],
                  inclusion: true
                },
                units: {
                  units: ['*'],
                  inclusion: true
                },
                scale: 1.5, //Multiplier for the original value, and the product will be used as the 3rd param for clamp()
                changeRate: '4vw' //The rate for the value to change.  This value will be used as the 2nd param for clamp()
              }
            )
          ]
        }
      ]
    })
  ]
}
```

```css
/* After transformation */
p {
  font-size: clamp(30px, 4vw, 45px);
  padding: 15px;
}

```

## Installation

This plugin require you to use [PostCSS Sparrow](https://www.npmjs.com/package/postcss-sparrow) for matching with selectors you want.

Download both `postcss-sparrow` and this plugin through NPM.

```shell

npm i postcss postcss-sparrow bewater

```

Then import this plugin as the callback for [PostCSS Sparrow](https://www.npmjs.com/package/postcss-sparrow).

## API Reference

### `options.props` : Object

Filter options for filtering CSS declaration by its prop.  Read the API reference of [PostCSS Sparrow Props Filter](https://www.npmjs.com/package/postcss-sparrow-props-filter#api-reference) for more details.

### `options.units` : Object

Filter options for filtering CSS declaration by its prop.  Read the API reference of [PostCSS Sparrow Units Filter](https://www.npmjs.com/package/postcss-sparrow-units-filter#api-reference) for more details.

### `options.scale` : Number

Multiplier for the original value, and the product will be used as the 3rd param for `clamp()`.

### `options.changeRate` : String

The rate for the value to change.  This value will be used as the 2nd param for `clamp()`.

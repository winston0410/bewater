# Be water

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/ff6544cbff114d008f05708e334f987a)](https://www.codacy.com/manual/winston0410/bewater?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=winston0410/bewater&amp;utm_campaign=Badge_Grade) [![Known Vulnerabilities](https://snyk.io/test/github/winston0410/bewater/badge.svg?targetFile=package.json)](https://snyk.io/test/github/winston0410/bewater?targetFile=package.json) [![Maintainability](https://api.codeclimate.com/v1/badges/6822f950185d354940ba/maintainability)](https://codeclimate.com/github/winston0410/bewater/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/6822f950185d354940ba/test_coverage)](https://codeclimate.com/github/winston0410/bewater/test_coverage)

**Be water, be fluid, be responsive.**

![Cover image for Be water](/gilles-rolland-monnet-water.jpg)

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

Filter options for filtering CSS declaration by its prop.  Read the API reference of [PostCSS Sparrow Props Filter](https://www.npmjs.com/package/postcss-sparrow-props-filter#api-reference) for more details. `props` defaults to `[*]` and `inclusion` defaults to `true`.

### `options.units` : Object

Filter options for filtering CSS declaration by its prop.  Read the API reference of [PostCSS Sparrow Units Filter](https://www.npmjs.com/package/postcss-sparrow-units-filter#api-reference) for more details. `units` defaults to `[*]` and `inclusion` defaults to `true`.

### `options.scale` : Number

Multiplier for the original value, and the product will be used as the 3rd param for `clamp()`.  Default to `2`.

### `options.changeRate` : String

The rate for the value to change.  This value will be used as the 2nd param for `clamp()`. Default to `2vw`.

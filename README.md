# Be water

**Be water, be fluid, be responsive.**

A PostCSS plugin that helps you automatically apply `clamp()` to values to achieve a fluid design efficently.

```css
/* Before transformation */
p{
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
                props: ['font-size'],
                units: ['*'],
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
p{
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

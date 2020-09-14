import {
  calculateMaxSize
} from './utilities/helper.js'

import * as S from 'sanctuary'

const clampValue = (decl) => {

}

const getValue = S.prop('value')

const getMaxSize = (options) => (decl) => S.pipe([
  getValue,
  calculateMaxSize(options)
])(decl)

export default (config) => (decl) => {
  const options = {
    scale: config.scale,
    changeRate: config.changeRate
  }

  return require('postcss-sparrow-props-filter')({
    props: ['*'],
    inclusion: true,
    callbacks: [
      require('postcss-sparrow-units-filter')({
        units: ['*'],
        inclusion: true,
        callbacks: [
          (decl) => {
            const maxSize = getMaxSize(options)(decl)
            const clampedValue = `clamp(${decl.value}, ${options.changeRate}, ${maxSize})`
            decl.replaceWith(`${decl.prop}: ${clampedValue}`)
          }
        ]
      })
    ]
  })(decl)
}

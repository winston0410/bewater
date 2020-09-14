import {
  getMaxSize
} from './utilities/helper.js'

import * as S from 'sanctuary'

export default (config) => (decl) => {
  const options = {
    scale: config.scale,
    changeRate: config.changeRate,
    props: config.props,
    units: config.units
  }

  return require('postcss-sparrow-props-filter')({
    props: options.props,
    inclusion: true,
    callbacks: [
      require('postcss-sparrow-units-filter')({
        units: options.units,
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

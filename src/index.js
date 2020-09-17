import {
  getMaxSize,
  clamp,
  minmax
} from './utilities/helper.js'

import * as S from 'sanctuary'

export default (config) => (decl) => {
  const options = {
    scale: config.scale,
    changeRate: config.changeRate,
    useMinMax: config.useMinMax,
    props: {
      props: config.props.props,
      inclusion: config.props.inclusion
    },
    units: {
      units: config.units.units,
      inclusion: config.units.inclusion
    }
  }

  return require('postcss-sparrow-props-filter')({
    props: options.props.props,
    inclusion: options.props.inclusion,
    callbacks: [
      require('postcss-sparrow-units-filter')({
        units: options.units.units,
        inclusion: options.units.inclusion,
        callbacks: [
          (decl) => {
            const maxSize = getMaxSize(options)(decl)
            const clampedValue = S.ifElse(
              S.equals(true)
            )(
              () => minmax(decl.value)(options.changeRate)(maxSize)
            )(
              () => clamp(decl.value)(options.changeRate)(maxSize)
            )(options.useMinMax)

            decl.replaceWith(`${decl.prop}: ${clampedValue}`)
          }
        ]
      })
    ]
  })(decl)
}

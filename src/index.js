import {
  getMaxSize,
  clamp
} from './utilities/helper.js'

import * as S from 'sanctuary'

import {
  defaultTo
} from 'ramda'

export default (config) => (decl) => {
  const options = {
    scale: defaultTo(2)(config.scale),
    changeRate: defaultTo('2vw')(config.changeRate),
    props: {
      props: defaultTo(['*'])(config.props.props),
      inclusion: defaultTo(true)(config.props.inclusion)
    },
    units: {
      units: defaultTo(['*'])(config.units.units),
      inclusion: defaultTo(true)(config.units.inclusion)
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
            const clampedValue = clamp(decl.value)(options.changeRate)(maxSize)

            decl.replaceWith(`${decl.prop}: ${clampedValue}`)
          }
        ]
      })
    ]
  })(decl)
}

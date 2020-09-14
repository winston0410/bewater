import {
  getValue
} from './partial-functions/value.js'

import {
  getSize
} from './partial-functions/size.js'

import {
  getUnit
} from './partial-functions/unit.js'

import * as S from 'sanctuary'

const calculateMaxSize = (options) => (value) => {
  const unit = getUnit(value)
  const number = getSize(value)(unit)
  const maxNumber = number * options.scale
  return `${maxNumber}${unit}`
}

const getMaxSize = (options) => (decl) => S.pipe([
  getValue,
  calculateMaxSize(options)
])(decl)

export {
  getMaxSize
}

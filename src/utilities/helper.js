import {
  getValue
} from './partial-functions/value.js'

import {
  calculateMaxSize
} from './partial-functions/size.js'

import * as S from 'sanctuary'

const getMaxSize = (options) => (decl) => S.pipe([
  getValue,
  calculateMaxSize(options)
])(decl)

export {
  getMaxSize
}

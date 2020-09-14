import * as S from 'sanctuary'

import {
  extractMaybeResult
} from './general.js'

const getSize = (value) => (unit) => S.pipe([
  (str) => (`\\S*(?=${str})`),
  S.regex(''),
  S.match,
  S.T(value),
  extractMaybeResult
])(unit)

export {
  getSize
}

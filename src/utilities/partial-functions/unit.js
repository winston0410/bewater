import * as S from 'sanctuary'

import {
  extractMaybeResult
} from './general.js'

const unitList = [
  'px', 'fr', '%', 'em', 'rem', 'vw', 'vh', 'vmin', 'vmax', 'ch'
]

const getUnit = (value) => S.pipe([
  S.map((str) => `(?<=\\d)${str}$`),
  S.map(S.regex('')),
  S.map(S.match),
  S.map(S.T(value)),
  S.justs,
  S.last,
  extractMaybeResult
])(unitList)

export {
  getUnit
}

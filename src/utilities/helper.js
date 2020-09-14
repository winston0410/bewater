import {
  getValue
} from './partial-functions/value.js'

import {
  calculateMaxSize
} from './partial-functions/size.js'

import * as S from 'sanctuary'

// const unitList = [
//   'px', 'fr', '%', 'em', 'rem', 'vw', 'vh', 'vmin', 'vmax', 'ch'
// ]
//
// const stripUnit = (value) => S.pipe([
//   S.map(S.stripSuffix),
//   S.map(
//     S.T(value)
//   ),
//   (v) => (console.log(v), v)
// ])(unitList)

export {
  calculateMaxSize
}

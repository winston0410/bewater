import * as S from 'sanctuary'

const unitList = [
  'px', 'fr', '%', 'em', 'rem', 'vw', 'vh', 'vmin', 'vmax', 'ch'
]

const extractMaybeResult = S.pipe([
  S.maybe({})(S.I),
  S.prop('match')
])

const getUnit = (value) => S.pipe([
  S.map((str) => `(?<=\\d)${str}$`),
  S.map(S.regex('')),
  S.map(S.match),
  S.map(S.T(value)),
  S.justs,
  S.last,
  extractMaybeResult
])(unitList)

const getNumber = (value) => (unit) => S.pipe([
  (str) => (`\\S*(?=${str})`),
  S.regex(''),
  S.match,
  S.T(value),
  extractMaybeResult
])(unit)

const calculateMaxSize = (options) => (value) => {
  const unit = getUnit(value)
  const number = getNumber(value)(unit)
  const maxNumber = number * options.scale

  return `${maxNumber}${unit}`
}

export {
  calculateMaxSize
}

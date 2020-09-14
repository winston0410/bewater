import * as S from 'sanctuary'

const unitList = [
  'px', 'fr', '%', 'em', 'rem', 'vw', 'vh', 'vmin', 'vmax', 'ch'
]

const calculateMaxSize = (value) => {
  const unit = S.pipe([
    S.map((str) => `(?<=\\d)${str}$`),
    S.map(S.regex('')),
    S.map(S.match),
    S.map(S.T(value)),
    S.justs,
    S.last,
    S.maybe({})(S.I),
    S.prop('match')
  ])(unitList)

  console.log(unit)
}

export {
  calculateMaxSize
}

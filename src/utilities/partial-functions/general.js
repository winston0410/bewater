import * as S from 'sanctuary'

const extractMaybeResult = S.pipe([
  S.maybe({})(S.I),
  S.prop('match')
])

export {
  extractMaybeResult
}

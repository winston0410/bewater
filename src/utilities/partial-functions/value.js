import * as S from 'sanctuary'

const getValue = S.prop('value')

const clamp = S.curry3(
  (min, fluid, max) => `clamp(${min}, ${fluid}, ${max})`
)

export {
  getValue,
  clamp
}

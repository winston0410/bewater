import * as S from 'sanctuary'

const getValue = S.prop('value')

const clamp = S.curry3(
  (min, fluid, max) => `clamp(${min}, ${fluid}, ${max})`
)

const minmax = S.curry3(
  (min, fluid, max) => `max(${min}, min(${fluid}, ${max}))`
)

export {
  getValue,
  clamp,
  minmax
}

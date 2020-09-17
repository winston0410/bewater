import * as S from 'sanctuary'

const getValue = S.prop('value')

const clamp = (min, fluid, max) => `clamp(${min}, ${fluid}, ${max})`

const minmax = (min, fluid, max) => `max(${min}, min(${fluid}, ${max}))`

export {
  getValue,
  clamp,
  minmax
}

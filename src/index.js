import * as S from 'sanctuary'

export default (config) => (decl) => {
  const options = {
    scale: config.scale,
    changeRate: config.changeRate
  }
}

// const options = {
//   props: R.defaultTo(['display'])(getProps(config)),
//   values: R.defaultTo(['none'])(getValues(config)),
//   declValue: R.defaultTo('auto')(getDeclValue(config))
// }

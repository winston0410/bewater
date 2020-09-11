import * as S from 'sanctuary'

export default (config) => (decl) => {
  const options = {
    scale: config.scale,
    changeRate: config.changeRate
  }

  return require('postcss-sparrow-props-filter')({
    props: ['*'],
    inclusion: true,
    callbacks: [
      require('postcss-sparrow-units-filter')({
        units: ['*'],
        inclusion: true,
        callbacks: [

        ]
      })
    ]
  })
}

// const options = {
//   props: R.defaultTo(['display'])(getProps(config)),
//   values: R.defaultTo(['none'])(getValues(config)),
//   declValue: R.defaultTo('auto')(getDeclValue(config))
// }

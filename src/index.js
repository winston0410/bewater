import * as S from 'sanctuary'

const clampValue = (decl) => {

}

const getValue = S.prop('value')

const calculateMaxSize = (sx) => {
  console.log(sx)
}

const getMaxSize = (options) => (decl) => S.pipe([
  getValue,
  calculateMaxSize
])(decl)

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
          S.pipe([
            getMaxSize(options)

          ])
        ]
      })
    ]
  })(decl)
}

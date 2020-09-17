const postcss = require('postcss')
const chai = require('chai')
const sinon = require('sinon')
const expect = chai.expect
const bewater = require('../src/index.js')

describe('Be water', function () {
  let css, beforeDeclCount

  beforeEach(function () {
    css = `
    body{
      padding: 5rem;
      display: none;
      font-family: san-serif;
    }

    a{
      letter-spacing: 20px;
      line-height: 3;
      color: #be132d;
      border: 2px solid #f5f5f5;
    }`
  })

  afterEach(function () {
    sinon.restore()
  })

  describe('when the value of the filtered rule has unit', function () {
    it('should transform it with clamp()', async function () {
      const result = await postcss([
        require('postcss-sparrow')({
          transformations: [
            {
              selectors: ['*'],
              inclusion: true,
              callbacks: [
                bewater.default({
                  scale: 2,
                  changeRate: '2vw',
                  props: {
                    props: ['*'],
                    inclusion: true
                  },
                  units: {
                    units: ['*'],
                    inclusion: true
                  }
                })
              ]
            }
          ]
        }),
        require('postcss-sparrow')({
          transformations: [
            {
              selectors: ['*'],
              inclusion: true,
              callbacks: [
                require('postcss-sparrow-props-filter')({
                  props: ['letter-spacing', 'padding'],
                  inclusion: true,
                  callbacks: [
                    (decl) => {
                      expect(decl.value).to.match(/^max/)
                      expect(decl.value).to.match(/min/)
                    }
                  ]
                })
              ]
            }
          ]
        })
      ])
        .process(css, {
          from: undefined
        })
    })
  })
})

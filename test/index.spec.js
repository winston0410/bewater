const postcss = require('postcss')
const R = require('ramda')
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
                bewater.default({})
              ]
            }
          ]
        })
      ])
        .process(css, {
          from: undefined
        })

      // console.log(result)
    })
  })
})

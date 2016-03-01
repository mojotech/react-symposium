require('babel-register')()

global.document = require('jsdom').jsdom('')
global.window = document.defaultView
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property]
  }
})

global.navigator = {
  userAgent: 'node.js'
}

global.source = function(filename) {
  return filename.replace('test', 'src').replace('js', 'jsx')
}

require.extensions['.styl'] = function() {}

global.React = require('react')
global.sinon = require('sinon')

var enzyme = require('enzyme')
global.shallow = enzyme.shallow
global.mount = enzyme.mount

var chai = require('chai')
var sinonChai = require('sinon-chai')
var chaiEnzyme = require('chai-enzyme')

chai.should()
chai.use(sinonChai)
chai.use(chaiEnzyme())

import ReactDOM from 'react-dom'

describe('index', () => {
  let stubs = {}

  beforeEach(() => {
    stubs.render = sinon.stub(ReactDOM, 'render')
    require(source(__filename))
  })

  afterEach(() => {
    stubs.render.restore()
  })

  it('should render the <App> component', () => {
    stubs.render.should.have.been.calledOnce
  })
})

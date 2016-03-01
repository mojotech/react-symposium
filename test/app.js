const { App } = require(source(__filename))

describe('<App>', () => {
  it('should render', () => {
    const wrapper = shallow(<App />)
    wrapper.should.be.present()
  })

  it('should render a <Greeter> component', () => {
    const wrapper = mount(<App />)
    wrapper.should.have.exactly(1).descendants('.greeter')
  })
})

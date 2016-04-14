const { Greeter } = require(source(__filename))

describe('<Greeter>', () => {
  it('should render', () => {
    const wrapper = shallow(<Greeter />)
    wrapper.should.be.present()
  })

  it('should greet by name', () => {
    const wrapper = shallow(<Greeter name='Friend' />)
    wrapper.should.have.text('Hello, Friend.')
  })
})

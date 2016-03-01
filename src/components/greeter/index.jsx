import './styles'

export const Greeter = ({ name }) =>
  <div className='greeter'>
    <h1>Hello, {name}.</h1>
  </div>

Greeter.propTypes = {
  name: React.PropTypes.string
}

export default Greeter

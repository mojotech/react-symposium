import './styles';

export class Greeter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name
    };

    this.updateText = this.updateText.bind(this);
  }

  updateText(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <div className='greeter'>
        <h1>Hello, {this.state.name}.</h1>
        <input name="name" value={this.state.name} onChange={this.updateText} />
        &nbsp;
        <label htmlFor="name">(Change me...)</label>
      </div>
    );
  }
}

Greeter.propTypes = {
  name: React.PropTypes.string
};

export default Greeter;

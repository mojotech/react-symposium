import './styles';
import Greeter from './components/greeter';

export class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <Greeter name='World'/>
      </div>
    );
  }
}

export default App;

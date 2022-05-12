
import './App.css';
import Colorchange from './Component/Colorchange';
import Person from './Component/Person';
import Coffee from './Component/Coffee';
import State from './Component/State';
import Async from './Component/practice/Async';
import Convertor from './Component/practice/Childfun';
import Propvsstate from './Component/practice/Toggle';
import Says from './Component/Props';

function App() {
  return (
    <div className="App">
      <Colorchange />
      <Person/>
      <Says/>
      <Coffee/>
      <State />
      <Async/>
      <Convertor/>
      <Propvsstate/>

    </div>
  );
}

export default App;

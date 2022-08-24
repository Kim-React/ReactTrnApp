import logo from './logo.svg';
import './App.css';
import { Greet } from './greet';
import Welcome from './Welcome';
import Message from './Message';
import { Counter } from './Components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter incrementValue="5"/>
        <Counter incrementValue="10"/>
        <Counter incrementValue="15"/>
        <Counter incrementValue="20"/>
      </header>
    </div>
  );
}

export default App;

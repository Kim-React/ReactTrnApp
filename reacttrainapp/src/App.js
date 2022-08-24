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
        <Counter/>
      </header>
    </div>
  );
}

export default App;

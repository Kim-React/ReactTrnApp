import logo from './logo.svg';
import './App.css';
import { Greet } from './Components/greet';
import Welcome from './Welcome';
//import Message from './Components/Message';
import { Counter } from './Components/Counter';
import HookCounterTwo from './Components/HookCounterTwo';
import User from './Components/User';
import Tilesf from './Components/Tilesf';
import HookMouse from './Components/HookMouse';

function App() {
  return (
    <div className="App">
      <header className="App-header">
     <HookMouse/>
      </header>
    </div>
  );
}

export default App;

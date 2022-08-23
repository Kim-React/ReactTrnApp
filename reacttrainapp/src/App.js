import logo from './logo.svg';
import './App.css';
import { Greet } from './greet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          React rocks front end web develoment
        </p>
        <Greet/>
      </header>
    </div>
  );
}

export default App;

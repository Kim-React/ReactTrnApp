import logo from './logo.svg';
import './App.css';
import { Greet } from './greet';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          React rocks front end web develoment
        </p>
        <Greet name="john" >
         <p> I am child of Greet component</p>
          </Greet>
        <Greet name="kevin">
          <button>Kevin Button</button>
          </Greet>
        <Greet name="bob"/>
        <Greet name="david"/>
        <Welcome name="Modi"></Welcome>
        <Welcome name="Rahul"></Welcome>
      </header>
    </div>
  );
}

export default App;

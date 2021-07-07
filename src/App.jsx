import './App.css';
import {Router} from '@reach/router'
import Home from './components/Home'
import Phrase from './components/Phrase'
import Color from './components/Color'

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <Phrase path="/:phrase"/>
        <Color path="/:phrase/:color1/:color2"/>
      </Router>
    </div>
  );
}

export default App;

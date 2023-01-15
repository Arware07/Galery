import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Atreven from './components/Atreven';
import Camino from './components/Camino';
import Confort from './components/Confort';
import Firmemente from './components/Firmemente';
import Trabaja from './components/Trabaja';
import Unica from './components/Unica';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Route path='/Atreven' component={Atreven}/>
      <Route path='/Camino' component={Camino}/>
      <Route path='/Confort' component={Confort}/>
      <Route path='/Firmemente' component={Firmemente}/>
      <Route path='/Trabaja' component={Trabaja}/>
      <Route path='/Unica' component={Unica}/>
    <Navigation/>

    </Router>
  );
}

export default App;

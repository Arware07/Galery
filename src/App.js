import './App.css';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
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
      <Routes path='/Atreven' component={Atreven}/>
      <Routes path='/Camino' component={Camino}/>
      <Routes path='/Confort' component={Confort}/>
      <Routes path='/Firmemente' component={Firmemente}/>
      <Routes path='/Trabaja' component={Trabaja}/>
      <Routes path='/Unica' component={Unica}/>
    <Navigation/>

    </Router>
  );
}

export default App;

import './App.css';
import Home from './components/Home';
import Beers from './components/Beers';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/beer" element={<Beers />} />
        <Route path="/beers/:id" element={<BeerDetails />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;

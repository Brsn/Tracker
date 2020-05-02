import React from 'react';
import logo from './logo.svg';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import './App.css';

function App() {
  return (
    <div className="App">
      <Cards />
      <Chart />
      <CountryPicker />
    </div>
  );
}

export default App;

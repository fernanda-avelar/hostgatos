import React from 'react';
import NavBar from './components/navbar/navbar';
import SideBar from './components/sidebar/sidebar';
import BreedList from './Breeds/BreedList'
// import { useSelector } from 'react-redux';

import './App.css';

function App() {
  // const counter = useSelector(state => state.counter);
  return (
    <div className="App">
      <div className="side">
        <SideBar />
      </div>
      <div className="main">
        <NavBar />
        <BreedList/>
        {/* <h1>Counter {counter}</h1> */}
      </div>
    </div>
  );
}

export default App;

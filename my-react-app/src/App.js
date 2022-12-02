import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {orginals,action} from './urls'




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost url={orginals} title='Netflix Orginals'/>
      <RowPost url={action} title='Action' isSmall />
     
    </div>
  );
}

export default App;

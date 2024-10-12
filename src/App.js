import React from 'react';

import './App.css';
import Pizzahut from './components/Pizzahut';
import Showpassword from './components/Showpassword';
import DigitalWatch from './components/DigitalWatch';
function App() {
  return (
    <div className="App">
      
        <nav className='navbar navbar-dark bg-dark navbar-expand'>
          <a href="#">Pizzhut</a>
        </nav>
 
        <Pizzahut/>
        <Showpassword/> 
        <DigitalWatch/>
           </div>
  );
}

export default App;

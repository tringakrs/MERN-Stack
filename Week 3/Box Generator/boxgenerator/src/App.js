import './App.css';
import React, { useState } from 'react';
import NinjaForm from './components/NinjaForm';
import NinjaDisplay from './components/NinjaDisplay';

function App() {
  // Ninja Bonus: Add a second input that takes in an integer. 
  //    This integer will allow the user to specify the height and width of the generated box.
  //    Using an object to hold both the integer and the color together
  const [ ninjaBoxArray, setNinjaBoxArray ] = useState([])

  return (
    <div className="App">
      <NinjaForm ninjaBoxArray={ ninjaBoxArray } setNinjaBoxArray={ setNinjaBoxArray } />
      <NinjaDisplay ninjaBoxArray={ ninjaBoxArray } />
    </div>
  );
}

export default App;
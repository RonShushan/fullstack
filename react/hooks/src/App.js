import logo from './logo.svg';
import './App.css';
import UseState from './pages/UseState';
import UseStateHooks from './pages/UseStateHooks';
import UseStateText from './pages/UseStateText';
import UseEffectFN from './pages/UseEffectFN';
import AddCarToNode from './pages/AddCarToNode';



//us - const [user, setuser] = useState();
//imrs - import React, { useState } from 'react';
//imrse - import React, { useState, useEffect } from 'react';
//ue - useEffect(() => {}, []);


function App() {
  return (
    <div className="App">
        {/* <UseStateHooks /> */}
        {/* <UseStateText /> */}
        {/* <UseEffectFN /> */}
        <AddCarToNode />
    </div>
  );
}

export default App;

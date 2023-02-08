import React from 'react';

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import reducers from './redux/reducers';

import './App.css';
import Home from './pages/Home';
import Numbers from './pages/Numbers';
import Form from './pages/Form';
import Table from './pages/Table';
import UseSelectorHooks from './pages/hooks/UseSelectorHooks';
import HooksRedux from './pages/hooks/HooksRedux';

const store = configureStore({ reducer: reducers })

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <Home></Home>
            <Numbers></Numbers> */}
        {/* <UseSelectorHooks /> */}
        {/* <HooksRedux /> */}
        <div className='row'>
          <div className='col-2'>
            <Form />
          </div>
          <div className='col-10'>
            <Table />
          </div>
        </div>
      </Provider>
    </div>
  );
}

export default App;


// npm install axios
// npm install redux react-redux @reduxjs/toolkit
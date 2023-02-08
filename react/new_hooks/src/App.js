import logo from './logo.svg';
import './App.css';
import P1 from './pages/P1';

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import reducers from './redux/reducers';
import Favorite from './components/Favorite';
import Users from './pages/Users';

const store = configureStore({ reducer: reducers })

function App() {
  return (
    <div className="App">
         <Provider store={store}>
            <div className='row'>
                <div className='col-9'>
                    <Users />
                </div>
                <div className='col-3'>
                    {/* <Favorite /> */}
                </div>
            </div>  
         </Provider> 
    </div>
  );
}

export default App;

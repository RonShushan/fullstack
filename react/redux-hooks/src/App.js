import logo from './logo.svg';
import './App.css';

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import reducers from './redux/reducers';
import HooksReduxPage from './pages/HooksReduxPage';

const store = configureStore({ reducer: reducers })

function App() {
  return (
    <Provider store={store}>
        <div className="App">
            <HooksReduxPage />
        </div>
    </Provider>
  );
}

export default App;

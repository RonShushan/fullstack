import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter, Routes , useParams  } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Nav from './components/Nav';
import Show from './pages/Show';

function App() {
  return (
    <BrowserRouter>
        <Nav />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/show/:id' element={<Show />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

// add redux and routing to project 
// build shows page
// build show page
//
// const { id } = useParams();
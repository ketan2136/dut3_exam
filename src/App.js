import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from '../src/components/Header'
import  Home  from '../src/container/Home';
import  About  from '../src/container/About';
import Card from './container/Card';
import List from './container/List';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/home' element={<Home />}/>
      <Route path='/about' element={<About />} />
      <Route path='/card' element={<Card />} />
      <Route path='/list' element={<List />} />

    </Routes>
    </>
    // <>
    // <Home />
    // </>
  );
}

export default App;

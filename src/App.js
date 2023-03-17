import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signin from './components/Signin';
import Navbar from './components/Navbar';
import Home from './components/Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
 
    <BrowserRouter>
      <Navbar/>
      <Routes>     
        <Route path={'/Login'}element={<Login/>}></Route>
        <Route path={'/Signin'}element={<Signin/>}></Route>
        <Route path={'/Home'}element={<Home/>}></Route>
        </Routes>
     
    </BrowserRouter>


    </div>
  );
}

export default App;

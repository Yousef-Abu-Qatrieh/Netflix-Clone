import logo from './logo.svg';
import './App.css';
import {Route,Routes,Switch} from 'react-router-dom'
import  Navbar  from './Components/Navbar/Navbar';
import Home from './Components/Home/Home'
import FavList from './Components/FavList/FavList'
// import  Navbar  from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
       <Navbar/>
      {/* <Navbar/> */}
   <Routes>
   <Route path='/' exact  element={<Home/>} />
    <Route path='/favorite' exact element={<FavList/>} /> *


  </Routes>
 



    </div>
  );
}

export default App;

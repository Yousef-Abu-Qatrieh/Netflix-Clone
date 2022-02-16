import logo from './logo.svg';
import './App.css';
import {Route,Routes,Switch} from 'react-router-dom'
import Home from './Components/Home/Home'


function App() {
  return (
    <div>
      {/* <Navbar/> */}
   <Routes>
   <Route path='/' exact  element={<Home/>} />
   {/* <Route path='/trending' exact element={</>} /> */}


  </Routes>
 



    </div>
  );
}

export default App;


import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from './Home';
import Room from './Room';
import Login from './Login';
import Logout from './Logout';
function App() {
  return (
    <div className="App">
     <Routes>
     <Route path="/" element={<Logout/>}/>
     <Route path="/login" element={<Login/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path='/room/:roomId' element={<Room></Room>}/>
      <Route path="/Logout" element={<Logout/>}/>
     </Routes>
    </div>
  );
}

export default App;

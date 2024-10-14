import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Component/Login';
import Lginadmin from './Component/Lginadmin';
import Registration from './Component/Registration';
import Customer from './Component/Customer';
import Addquery from './Component/Addquery';
import Homepage from './Component/Homepage';
import Viewpquery from './Component/Viewpquery';
import Viewproquery from './Component/Viewproquery';
import Viewcompquery from './Component/Viewcompquery';
import Edit from './Component/Edit';
import Admindashboard from './Component/Admindashboard';
import Admin from './Component/Admin';

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Routes>
          <Route exact path="/Login" element={<Login />}/>
          <Route exact path="/" element={<Homepage />}/>
          <Route exact path="/Loginadmin" element={<Lginadmin />}/>
          <Route exact path="/Registration" element={<Registration/>}/>
          <Route exact path='/Admindash' element={<Admindashboard/>}/>
          <Route exact path='/Admin' element={<Admin/>}/>
          <Route exact path='/Customer/:id' element={<Customer></Customer>}/>
          <Route exact path='/Addquery/:id' element={<Addquery/>}/>
          <Route exact path='/Edit/:id' element={<Edit/>}/>
          <Route exact path='/Viewpquery/:id' element={<Viewpquery />}/>
          <Route exact path='/Viewproquery/:id' element={<Viewproquery />}/>
          <Route exact path='/Viewcompquery/:id' element={<Viewcompquery />}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

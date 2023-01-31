
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from "react-router-dom";
import './App.css';
import Animals from './components/Animals';
import Birds from './components/Birds';
import Employees from './components/Employees';
import LivingThings from './components/LivingThings';
import Users from './components/Users';

function App() {
  return (
    <div className="container">
      <div className="row mb-5">
        <h3>React Router DOM Example</h3>
      </div>
      <div className="row">
        <div className="col-3 border">
          <LivingThings />
        </div>
        <div className="col-9 border">
          <Routes>
            <Route path="/users" element={<Users></Users>}></Route>
            <Route path="/birds" element={<Birds></Birds>}></Route>
            <Route path="/employees" element={<Employees></Employees>}></Route>
            <Route path="/animals" element={<Animals></Animals>}></Route>
          </Routes>
        </div>
      </div>
    </div >
  )
}

export default App;

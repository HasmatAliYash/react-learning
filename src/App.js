
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import './App.css';
import Employees from './components/Employees';
import Photos from './components/Photos';

function App() {
  return (
    <div className="container">
      <div className="row mb-5">
      </div>
      <div className="row">

        <ul style={{ listStyle: "none", fontSize: "24px", display: 'flex' }}>
          <li>
            <Button style={{ background: "#fff"}}>
              <Link to="photos">Photos</Link>
            </Button>
          </li>
          <li style={{ marginLeft: '20px' }}>
            <Button style={{ background: "#fff" }}>
              <Link to="employees">Employees</Link>
            </Button>
          </li>
        </ul>


        <div className="row">
          <Routes>
            <Route path="/photos" element={<Photos />}></Route>
            <Route path="/employees" element={<Employees />}></Route>
          </Routes>
        </div>

      </div>
    </div >
  )
}

export default App;

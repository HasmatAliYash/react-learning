import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import PrivateRoutes from './PrivateRoutes';

function App() {
  return (
    <div className="container-fluid">
      <div className="renderRoutes">
       <PrivateRoutes/>
      </div>
    </div>
  );
}

export default App;

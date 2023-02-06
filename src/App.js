import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LoginComponent from "./components/LoginComponent";
import RoutesComp from "./Routes";

function App() {
  return (
    <div className="App">
      {/* <LoginComponent /> */}
      <div className="renderRoutes">
        <RoutesComp />
      </div>
    </div>
  );
}

export default App;

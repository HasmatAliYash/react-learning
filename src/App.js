
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import ChildComp from './components/ChildComp';

function App() {
  const [counter, setCounterNumber] = useState(0);

  const increamnerHandler = () => {
    setCounterNumber(counter + 1);
  }

  const resetHandler = () => {
    setCounterNumber(0);
  }
  return (
    <div className="container">
      <ChildComp increamnerHandler={increamnerHandler} resetHandler={resetHandler} counter={counter} />
    </div>
  )
}

export default App;

import Kingdom from './components/Day1/Kingdom/Kingdom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FunctionBased from './components/Day2/FunctionBased.jsx';
import FunctionBased2 from './components/Day2/FunctionBased2';
import ClassBased from './components/Day2/ClassBased';

const userData = [
  {
    name: 'Hasmat',
    age: 30,
    gender: 'Male'
  },
  {
    name: 'Nikisha',
    age: 29,
    gender: 'Female'
  },
  {
    name: 'Ranjeet',
    age: 24,
    gender: 'Male'
  },
]

function App() {
  return (
    <>
      <h1 className='text-danger'>Day 1</h1>
      <Kingdom />
      {/* --------------------------------------------------------- */}
      <h1 className='text-danger'>Day 2</h1>
      <FunctionBased users={userData} />
      <FunctionBased2 />
      <ClassBased />
    </>

  );
}

export default App;

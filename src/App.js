
import { Link, Route, Routes } from 'react-router';
import './App.css';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Register';

function App() {
  return (
    <div>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
      <Routes>
        <Route path=" " element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/*" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;

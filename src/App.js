
import { Link, Route, Routes } from 'react-router';
import './App.css';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Register';
import Login from './Login';
import Invoice from './Invoice';

function App() {
  return (
    <div>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/invoice">Invoice</Link></li>
      </ul>
      <Routes>
        <Route path=" " element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/invoice" element={<Invoice/>}/>
        <Route path="/*" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;

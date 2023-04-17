import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home';
import Header from './Header';
import Login from './Login';
import Checkout from './Checkout';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        
      <Route path="/" element={[<Header/>,<Home/>]}/>
      <Route path="/Login" element={[<Login/>]}/>
      <Route path="/Checkout" element={[<Checkout/>]}/>
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;

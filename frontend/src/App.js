import "./css/App.css";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<h1>this is home</h1>}/>
          <Route exact path="/About" element={<h1>this is About</h1>}/>
          <Route exact path="/Pricing" element={<h1>this is Pricing</h1>}/>
          <Route exact path="/Services" element={<h1>this is Services</h1>}/>
          <Route exact path="/Login" element={<Login/>}/>
          <Route exact path="/Signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

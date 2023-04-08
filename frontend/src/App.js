import "./css/App.css";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Privatejudge from "./components/Privatejudge";
import Privatelawyer from "./components/Privatelawyer";
import Privateregistrar from "./components/privateregistrar";
// import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect,useState } from "react";


function App() {
  const [userType, setUserType] = useState("");
  const updateUserType=()=>{
    let user=localStorage.getItem("user");
    if(user){
      user=JSON.parse(user);
      user=user.userType;
      setUserType(user);
    }
  }

  useEffect(() => {
    
    updateUserType();
    console.log(userType)
    window.addEventListener("storage", updateUserType);

    return () => {
      window.removeEventListener("storage", updateUserType);
    };
  }, [userType]);
 return (
   <BrowserRouter>
     <Nav />
     <Routes>
       <Route path="/" element={<h1>Welcome to the Home page {userType}</h1>} />
       <Route path="/about" element={<h1>About page</h1>} />
       <Route path="/services" element={<h1>Services page</h1>} />

       {userType === "judge" ? (
         <Route element={<Privatejudge />}>
           <Route path="/judge" element={<h1>Judge Dashboard</h1>} />
         </Route>
       ) : null}

       {userType === "lawyer" ? (
         <Route element={<Privatelawyer />}>
           <Route path="/lawyer" element={<h1>Lawyer Dashboard</h1>} />
           <Route path="/pricing" element={<h1>Pricing page</h1>} />
         </Route>
       ) : null}

       {userType === "registrar" ? (
         <Route element={<Privateregistrar />}>
           <Route path="/registrar" element={<h1>Registrar Dashboard</h1>} />
         </Route>
       ) : null}

       <Route path="/login" element={<Login onLogin={updateUserType}/>} />
       <Route path="/signup" element={<Signup />} />
     </Routes>
   </BrowserRouter>
 );
}

export default App;

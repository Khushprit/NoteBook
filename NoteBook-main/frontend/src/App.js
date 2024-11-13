import React, {useState} from 'react'
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from "./components/Login";
import Signup from "./components/Signup";


function App() {
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  } 
  return (
    <>
    <NoteState>
      <BrowserRouter>
        <Navbar showAlert = {showAlert} />
        {<Alert  alert = {alert}/>}
        <Routes>
          <Route exact path="/" element={<Home showAlert = {showAlert}/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/login" element={<Login showAlert = {showAlert}/>}></Route>
          <Route exact path="/signup" element={<Signup showAlert = {showAlert}/>}></Route>
        </Routes>
        
      </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;

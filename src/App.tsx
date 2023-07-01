// import { useState, useEffect } from "react";
import "./styles.css";
import { Scissor } from "./components/Scissor";
import { Login } from "./components/Login";
import { Contact } from "./components/Contact";
import { Qrcode } from "./components/Qrcode";
import { Signup } from "./components/Signup";
import { Routes, Route } from "react-router-dom";
// import { auth } from "./firebase";

// import { Analytics } from "./components/Analytics";

export default function App() {
  // const [user, setUser] = useState(null);
  // const [initialLoad, setInitialLoad] = useState(true);

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     setUser(user);
  //     setInitialLoad(false);
  //   });
  // }, []);

  // if(initialLoad)
  return (
    <Routes>
      <Route path="/" element={<Scissor />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Qrcode" element={<Qrcode />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
}
//
// {
/* <Linkresult inputValue={inputValue}/> */
// }
// {
/* <Urlshortener setInputValue={setInputValue}/> */
// }

import React, { useState } from 'react';
import './App.css';
import Form from './component/Form/Form';

function App() {
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [emailON, setEmailON] = useState(false)
  let [passwordON, setPasswordON] = useState(false)
  let [emailError, setEmailError] = useState("Email cannot be blank")
  let [passwordError, setPasswordError] = useState("Password cannot be blank")


  function blureHandler(e){
    switch(e.target.name) {
      case "uzer-email":
        setEmailON(true);
        break;
      case "uzer-password":
        setPasswordON(true)
        break;
      default:
        break;
    }
  }

  function addEmail(e) {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())){
      setEmailError("Incorrect email")
    }else {
      setEmailError('')
    }
  }
  function addPassword(e) {
    setPassword(e.target.value)
    if (e.target.value.length < 6){
      setPasswordError("Password of at least 6 characters")
    } else{
      setPasswordError("")
    }
  }

  function Submit(event){
    event.preventDefault();
    if(passwordError){
      setPasswordON(true) 
    }
    if(emailError){
      setEmailON(true) 
    }
    if(!passwordError && !emailError){
      alert("Send to the server")
    }
  }



  return (
    <div className="conteiner">
      <h1 className="titel">Stackfindover</h1>
      <Form
        email={{ email, addEmail, emailError, emailON }}
        password={{ password, addPassword, passwordError, passwordON }} 
        blureHandler={blureHandler}
        Submit={Submit}/>
      <p className="account">Don't have an account? <a href="https://www.facebook.com/">Sing up</a></p>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./LoginPage.css";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const[message,setMessage]=useState('');
    const navigate = useNavigate();
  const onButtonClick = () => {
   
    //console.log("onButtonClick");
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
   
    fetch("https://localhost:44310/api/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then(async (response) => {
        var result = await response.json();
        localStorage.setItem("token", result.token);
        const token = localStorage.getItem("token");
        const decodedToken =jwtDecode(token);
        console.log(decodedToken);
        console.log(decodedToken.role);
        if (token != "undefined")
        {
          navigate('/user/create');
            setMessage("OK");
            
        }
        else{
            setMessage("Invalid username/password");
        }
      })
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="form">
      <div id="mainContainer">
        <div className="heading">
          {" "}
          <h1>Login</h1>
        </div>
        <div className="blur-container">
          <div className="heading1">
            {" "}
            <input type="text" id="email" placeholder="Enter Email" />
          </div>
          <div className="heading1">
            <input type="password" id="password" placeholder="Enter Password" />
          </div>

          <input
            className={"inputButton"}
            type="button"
            onClick={onButtonClick}
            value={"Log in"}
          />
          <p>{message}</p>
          <div className="forgot-Password">
            <p>
              Forgot your password. Contact Admin <a href="">Click Here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;

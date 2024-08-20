import React from 'react';
import './style/login.css';
import Button from '../components/Button';
import InputText from '../components/InputText';
import bgImg from '../images/movies/bg-transformer.jpg';

function Login() {
  return (
    <div id='login' className="login">
      <img
        src={bgImg}
        alt="Background Image"
        className="bgImg"
      />
      <div className="container-fluid">
        <div className="row main-login">
          <div className="col">
            <div className="left-content">
              <h2>Welcome Back!</h2>
              <p>Please log in to continue.</p>
              <InputText
                type="text"
                name="Username"
              />
              <InputText
                type="password"
                name="Password"
              />
              <Button
                icon={<ion-icon name="log-in-outline"></ion-icon>}
                name="Login"
                bgcolor="#007BFF"
                color="#fff"
              />
            </div>
          </div>
          <div className="col">
            <div className="right-content">
              <h2>New Here?</h2>
              <p>Create an account to get started.</p>
              <Button
                icon={<ion-icon name="person-add-outline"></ion-icon>}
                name="Sign Up"
                bgcolor="#6c757d"
                color="#fff"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

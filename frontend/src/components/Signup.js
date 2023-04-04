import React from "react";
import "../css/Signup.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const Navigate=useNavigate();
  const gotoLogin=()=>{
    Navigate('../Login');
  }
  return (
    <div className="sign-body">
      <div className="sign-container">
        <h1 className="sign-form-title">Registration</h1>
        <form>
          <div className="sign-main-user-info">
            <div className="sign-user-input-box">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter Full Name"
              />
            </div>
            <div className="sign-user-input-box">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter Username"
              />
            </div>
            <div className="sign-user-input-box">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
              />
            </div>
            <div className="sign-user-input-box">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter Phone Number"
              />
            </div>
            <div className="sign-user-input-box">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
              />
            </div>
            <div className="sign-user-input-box">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <div className="sign-gender-details-box">
            <span className="sign-gender-title">Gender</span>
            <div className="sign-gender-category">
              <input type="radio" name="gender" id="male" />
              <label htmlFor="male">Male</label>
              <input type="radio" name="gender" id="female" />
              <label htmlFor="female">Female</label>
              <input type="radio" name="gender" id="other" />
              <label htmlFor="other">Other</label>
              <p style={{color:'blue', fontSize:'18px',float:'right',cursor:'pointer'}} onClick={gotoLogin}>Login</p>
            </div>
          </div>
          <div className="sign-form-submit-btn">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;

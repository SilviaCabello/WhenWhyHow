import "./LogIn.css";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import NavBarLogin from "../NavBar/NavBarLogin";

function LogIn({ login, error }) {
  const [details, setDetails] = useState({ user: "", password: "" });
  const handleClick = (e) => {
    e.preventDefault();
    login(details);
  };

  /*const submitHandler = (e) => {
    e.preventDefault();
    login(details);
  };*/

  return (
    <div>
      <NavBarLogin />
      
        <div className="signin-container">
          <div className="title-signin">
            <h3 className="title-login">Please enter your username and password</h3>
          </div>
        </div>
        <div className="image-input-container">
          <div className="label-password-container">
            <div className="label-user">
              <label className="label-input" htmlFor="user">Username</label>
              <input
                className="inputuser"
                type="text"
                username="user"
                id="user"
                onChange={(e) => setDetails({ ...details, user: e.target.value })}
                value={details.user}
              />
            </div>
            <div className="label-password">
              <label className="label-input" htmlFor="password">Password</label>
              <input
                className="inputuser"
               type="password"
               password="password"
               id="password"
               onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
                }
                value={details.password}
              />
              </div>
              <div className="forgotten-psw">
                <p>Forgot your password?</p>
              </div>
            </div>
          <img
            className="calender-img"
            src="https://res.cloudinary.com/dnefeccae/image/upload/v1625045085/whenwhyHow/Group_16_1_y9dbl2.png"
            alt="calendar"
          /> 
        </div>
        <div className="signin">
          <input
            type="submit"
            value="Login"
            className="button2"
            onClick={handleClick}
          />
          {error != "" ? <div className="error">{error}</div> : ""}
        </div>
    </div>
  );
}

export default LogIn;

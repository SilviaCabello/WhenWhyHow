import "./LogIn.css";
import { useState, useEffect } from "react";

import NavBarLogin from "../NavBar/NavBarLogin";

function LogIn({ login, error, fetchData }) {
  const [details, setDetails] = useState({ username: "", password: "" });
  const [count, setCount] = useState(0);

  const handleClick = (e) => {
    login(details);
    setCount(count + 1);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(fetchData, [count]);

  return (
    <div className="wrapper">
      <NavBarLogin />
      <div className="login-content">
        <div className="signin-container">
          <div className="heading-container">
            <h3 className="heading">Please enter your username and password</h3>
          </div>
        </div>
        <div className="image-input-container">
          <div className="label-password-container">
            <div className="label-user">
              <label className="label-input" htmlFor="user">
                Username
              </label>
              <input
                className="inputuser"
                type="text"
                username="user"
                id="user"
                onChange={(e) =>
                  setDetails({ ...details, username: e.target.value })
                }
                value={details.user}
              />
            </div>
            <div className="label-password">
              <label className="label-input" htmlFor="password">
                Password
              </label>
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
        {error !== "" ? <div className="error">{error}</div> : ""}
        <div className="signin">
          <input
            type="submit"
            value="Login"
            className="button2"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}

export default LogIn;

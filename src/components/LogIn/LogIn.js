import "./LogIn.css";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

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
    <div className="login-container">
      <div className="signin-container">
        <div className="title-signin">
          <p>Sign in to Enter Your Profile</p>
        </div>
      </div>
      <div className="column1">
        <div className="column1">
          <form>
            <div className="label-user">
              <label htmlFor="user">User:</label>
              <input
                className="inputuser"
                type="text"
                username="user"
                id="user"
                onChange={(e) =>
                  setDetails({ ...details, user: e.target.value })
                }
                value={details.user}
              />
            </div>

            <div className="label-password">
              <label htmlFor="password">Password:</label>
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
          </form>
          <div className="form-calendar">
            <img className="form-calendar"
              src="https://res.cloudinary.com/dnefeccae/image/upload/v1625045085/whenwhyHow/Group_16_1_y9dbl2.png"
              alt="calendar"
            />
          </div>
        </div>
      </div>

      <div className="forgotten-psw">
        <p>Forgot your password?</p>
      </div>

      <div className="signin">
        <input
          type="submit"
          value="LogIn"
          className="button2"
          onClick={handleClick}
        />

        {error != "" ? <div className="error">{error}</div> : ""}
      </div>
    </div>
  );
}

export default LogIn;

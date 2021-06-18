import "./LogIn.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function LogIn({ login, error }) {
  const [details, setDetails] = useState({ user: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    login(details);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="login-container">
        <div className="signin-container">
          <div className="title-signin">
            <p>Sign in to Enter Your Profile</p>
          </div>
        </div>

        <div className="label-user">
          <label htmlFor="user">User:</label>
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
        <div className="forgotten-psw">
          <p>Forgot your password?</p>
        </div>

        <div className="signin">
          
            <input
              type="submit"
              value="LogIn"
              className="button2"
              onChange={LogIn}
            />
          

          {error != "" ? <div className="error">{error}</div> : ""}
        </div>
      </div>
    </form>
  );
}

export default LogIn;

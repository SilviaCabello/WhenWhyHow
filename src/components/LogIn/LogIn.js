import "./LogIn.css";

function LogIn() {
  return (
    <div className="container">
      <div className="signin-container">
        <div className="title-signin">
          <p>Sign in to Enter Your Profile</p>
        </div>
      </div>
      <div className="label-username">
        <label>Username</label>
        <div className="label-password">
          <label>Password</label>
        </div>
        <div className="forgotten-psw">
          <p>Forgot your password?</p>
        </div>
        <div className="signin-btn">
          <button>Sign In </button>
        </div>
      </div>
    </div>
  );
}

export default LogIn;

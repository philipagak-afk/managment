import { Link } from "react-router";
import fiscal from "../assets/fiscal.jpg";
function Signin() {
  return (
    <div className="auth signin">
      <form className="left">
        <h2>Log In</h2>
        <input
          type="email"
          placeholder="Enter your Email Address"
          name=""
          id=""
        />
        <input
          type="password"
          placeholder="Enter your Password"
          name=""
          id=""
        />
        <button>Log In</button>
        <div className="redirect">
          <p>
            Don&apos;t have an Account? <Link to="/signup">Create Account</Link>
          </p>
        </div>
        <a href="">Reset password</a>
      </form>
      <img src={fiscal} alt="" className="right" />
    </div>
  );
}

export default Signin;

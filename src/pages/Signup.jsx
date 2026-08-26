import { Link } from "react-router";
import fiscal from "../assets/fiscal.jpg";
function Signup() {
  return (
    <div className="auth">
      <form className="left">
        <h2>Create Account</h2>
        <input type="email" placeholder="Enter your Full Name" name="" id="" />
        <input
          type="email"
          placeholder="Enter your Email Address"
          name=""
          id=""
        />
        <input type="password" placeholder="See your Password" name="" id="" />
        <button>Create Account</button>
        <p>
          Already a User? <Link to="/signin">Sign In</Link>
        </p>
      </form>
      <img src={fiscal} alt="" className="right" />
    </div>
  );
}

export default Signup;

import { Link } from "react-router";
import fiscal from "../assets/fiscal.jpg";

function Reset() {
  return (
    <div>
       <form className="left">
        <h2>Reset Password</h2>
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
        <button>Send email</button>
        <div className="redirect">
          <p>
            Remembered your pasword?/
          </p>
          <Link to="/signin">Back to signin</Link>
        </div>
        <a href="">Reset password</a>
      </form>
      <img src={fiscal} alt="" className="right" />
    </div>
  );
    
  
}

export default Reset

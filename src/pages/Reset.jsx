import { Link } from "react-router";
import fiscal from "../assets/fiscal.jpg";
import { useState } from "react";
import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";

function Reset() {

const [email, setEmail] = useState("");
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState("");
const handleSendResetEmail = async (e)=> {
  e.preventDefault();
  try{
    setIsLoading(true);
    setError("");

    if(!email) return;

    await sendPasswordResetEmail(auth, email);
  }catch (err) {
    console.error(err.message);

    setError(err.message);
  }finally{
    setIsLoading(false);
  }
}  
return (
    <div>
       <form className="left" onSubmit={handleSendResetEmail}>
        <h2>Reset Password</h2>
        <input
         value ={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your Email Address"
          name=""
          id=""
        />
        {error && <p className="error">{error}</p>}
          <button>{isLoading? "sending email..":"send email"}</button>
      
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

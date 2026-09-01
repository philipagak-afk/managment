import { Link, useNavigate } from "react-router";
import fiscal from "../assets/fiscal.jpg";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import toast from "react-hot-toast";
function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      setisLoading(true);
      setError("");
      const { name, email, password } = user;
      if (!name || !email || !password) return;

      // firebase.auth().createUserWithEmailAndPassword(email, password).then(()=> {}).catch(error)=>{})
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      // console.log(userCredential);

      setUser({
        name: "",
        email: "",
        password: "",
      });
      navigate("/");
      toast.success("Account created successfully");
    } catch (err) {
      console.error(err.message);
      setError(err.message);
      setUser((user) => ({ ...user, password: "" }));
    } finally {
      setisLoading(false);
    }
  };

  return (
    <div className="auth">
      <form className="left" onSubmit={handleSignup}>
        <h2>Create Account</h2>
        <input
          value={user.name}
          onChange={(e) =>
            setUser((user) => ({ ...user, name: e.target.value }))
          }
          type="text"
          placeholder="Enter your Full Name"
          name=""
          id=""
        />
        <input
          value={user.email}
          onChange={(e) =>
            setUser((user) => ({ ...user, email: e.target.value }))
          }
          type="email"
          placeholder="Enter your Email Address"
          name=""
          id=""
        />
        <input
          value={user.password}
          onChange={(e) =>
            setUser((user) => ({ ...user, password: e.target.value }))
          }
          type="password"
          placeholder="See your Password"
          name=""
          id=""
        />
        {error && <p className="error">{error}</p>}
        <button disabled={isLoading}>
          {isLoading ? "Signing up.." : "Create Account"}
        </button>
        <p>
          Already a User? <Link to="/signin">Sign In</Link>
        </p>
      </form>
      <div className="right">
        <img src={fiscal} alt="" />
      </div>
    </div>
  );
}

export default Signup;
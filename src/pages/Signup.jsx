import { Link, useNavigate } from "react-router";
import fiscal from "../assets/fiscal.jpg";
import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
        await createUserWithEmailAndPassword(
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

  const handleSignInWithGoogle = ()=>{
    
      setisLoading(true)
      setError("")
     

const provider = new GoogleAuthProvider();

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

// auth.languageCode = 'it';
// To apply the default browser preference instead of explicitly setting it.
auth.useDeviceLanguage()
provider.setCustomParameters({
  'login_hint': 'user@example.com'
});

signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorMessage)
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  }).finally(()=>{
    setisLoading(false)
  });
    
  }

  const handleSignInWithGithub = () => {
    setisLoading(true);
  setError("")
  const provider = new GithubAuthProvider();
provider.addScope('repo');
provider.setCustomParameters({
  'allow_signup': 'false'
});

const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    navigate("/");
    toast.success("Account created successfully")
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(error);
    // ...
  })
  .finally(() => {
    setisLoading(false);
  });
  }
  

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
        <button disabled={isLoading} type="submit">
          {isLoading ? "Signing up.." : "Create Account"}
        </button>
        <button type="button" onClick={handleSignInWithGoogle}>signIn With Google</button>
        <button type="button" onClick={handleSignInWithGithub}>sign Up with Github</button>
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
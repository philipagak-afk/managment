import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { auth } from "../firebase"
import {  signInWithEmailAndPassword } from "firebase/auth"
import toast from "react-hot-toast"

function Signin() {
  const [user, setUser]= useState({
      email: "",
      password: ""
    })
  
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
  const navigate = useNavigate()
    const handleSignin = async (e)=>{
      e.preventDefault()
      try {
        setIsLoading(true)
        setError("")
        const { email, password} = user
        if(!email || !password) return
  
  // firebase.auth().createUserWithEmailAndPassword(email, password).then(()=>{}).catch((error)=>{})
         await signInWithEmailAndPassword(auth, email, password)
  
        // console.log(userCredential.user);
        setUser({
          email: "",
          password:""
        })
        navigate("/")
        toast.success("signin successful")
  
  
      } catch (err) {
        console.error(err.message);
        setError(err.message)
        setUser(user=>({...user, password:"" }))
      } finally{
        setIsLoading(false)
      }
    }
  return (
    <div className="auth">
        <form className="left" onSubmit={handleSignin}>
          <h3>Sign In</h3>
             <input value={user.email} onChange={e=>setUser(user=>({...user, email:e.target.value}))} type="email" placeholder="Enter your email address" name="" id="" />
            <input value={user.password} onChange={e=> setUser(user=>({...user, password: e.target.value}))} type="password" placeholder="Enter your password" name="" id="" />
            {error && <p className="error">{error}</p>}
            <button disabled={isLoading}>{isLoading ? "Signing in..": "Sign In"}</button>
            <div className="redirect">
              <p>Don&apos;t have an account?</p>
              <Link to="/signup">Create account</Link>
            </div>
            <Link to={"/reset"}>forgot password?</Link>
        </form>
        <div className="right">

        <img src="https://firebase-app-alpha.vercel.app/static/media/authBg.0a95d4379bcb3ec9b7cc.jpg" alt="" />
        </div>
    </div>
  )
}

export default Signin
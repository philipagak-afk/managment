import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Layout from "./pages/Layout";
import Signin from "./pages/Signin";
import Reset from "./pages/Reset";
import Signup from "./pages/Signup";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />} >
        <Route index element={<Home/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="categories" element={<Categories/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="settings" element={<Settings/>}/>
        </Route>
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="Reset"  element={<Reset/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

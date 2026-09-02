import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Layout from "./pages/Layout";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Reset from "./pages/Reset";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import ProtectedLayout from "./pages/ProtectedLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedLayout/>}>
          
        <Route path="" element={<Layout />} >
        <Route index element={<Home/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="categories" element={<Categories/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="settings" element={<Settings/>}/>
        </Route>
        </Route>
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="reset" element={<Reset/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
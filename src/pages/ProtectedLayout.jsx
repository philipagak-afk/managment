import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";

// firebase.auth().onAuthStateChanged((user())
function ProtectedLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const auth = getAuth;

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      setIsAuthenticated(!!user);
    });
    return () => unsub();
  }, [auth]);
  if (loading) return <p>Loading... </p>;
  if (!isAuthenticated) return;
  <Navigate to={"/signin"} replace={true} />;
  return <Outlet />;
}

export default ProtectedLayout;
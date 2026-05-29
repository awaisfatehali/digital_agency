import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const adminLoggedIn =
    localStorage.getItem("adminLoggedIn") === "true";

  if (adminLoggedIn) {
    return children;
  } else {
    return <Navigate to="/admin/login" />;
  }
}

export default ProtectedRoute;
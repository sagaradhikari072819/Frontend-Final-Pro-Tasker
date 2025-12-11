import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

function NavBar() {
  const { logout, isAuthenticated } = useContext(AuthContext);
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-gray-900 text-white shadow-md">

      <NavLink  to="/" >Home</NavLink>
      
      <NavLink to="/projects" >Projects</NavLink>
      {/* <NavLink to='/register'>Register</NavLink>*/}
     
      {isAuthenticated ? (
        <button className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition" onClick={logout}>
          Logout
        </button>
      ) : (
        <NavLink to="/login" className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition">
          Login
        </NavLink>
      )}
    </nav>
  );
}

export default NavBar;
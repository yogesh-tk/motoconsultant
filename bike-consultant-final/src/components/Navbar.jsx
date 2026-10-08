import { Link, NavLink } from "react-router-dom";
import { UserButton } from "@clerk/react";

function Navbar({ user, favouriteCount }) {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand"><span className="brand-mark">M</span><span>motora<span className="dot">.</span></span></Link>
        <nav className="nav-links">
          <NavLink to="/">Home</NavLink><NavLink to="/bikes">Bikes</NavLink><NavLink to="/brands">Brandwise</NavLink><NavLink to="/search">Search</NavLink><NavLink to="/favourites">Fav ({favouriteCount})</NavLink>
          {user && <NavLink to="/my-bikes">My Uploads</NavLink>}
        </nav>
        <div className="account-area">
          {user ? <><span className="role-badge">{user.role}</span><UserButton /></> : <Link className="login-link" to="/login">Login</Link>}
        </div>
      </div>
    </header>
  );
}
export default Navbar;

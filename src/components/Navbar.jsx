import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        StudentGig
      </div>

      <div className="nav-links">

        <Link to="/">
          Explore Services
        </Link>

        <Link to="/post-project">
          Post a Project
        </Link>

        <Link to="/login">
          Login
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;
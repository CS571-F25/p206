import { Link } from "react-router-dom";
import "../App.css"; // 导航栏样式在 App.css 内

export default function NavbarMenu() {
  return (
    <div className="navbar-container">
      <div className="navbar-inner">
        <span className="navbar-brand">My Travel Moments</span>

        <Link to="/" className="nav-link">Home</Link>
        <Link to="/destinations" className="nav-link">Destinations</Link>
        <Link to="/about" className="nav-link">About Me</Link>
      </div>
    </div>
  );
}

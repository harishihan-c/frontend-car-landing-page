import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="logo">Evolve</div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className="contact-card">contact</li>
      </ul>
    </div>
  );
};

export default NavBar;

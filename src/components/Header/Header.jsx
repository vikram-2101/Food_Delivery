import { Link } from "react-router-dom";
import "./Header.css";
import { IoMdMenu } from "react-icons/io";
import { CiDark } from "react-icons/ci";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <section id="header">
      <Link to="/">
        <div className="logo-container">
          <img
            src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/logo.png"
            alt="logo"
            className="logo"
          />
          <b>BookAI</b>
        </div>
      </Link>

      {showSidebar ? (
        <Sidebar setShowSidebar={setShowSidebar} />
      ) : (
        <div>
          <ul id="navbar">
            <li>
              <Link to="/">Features</Link>
            </li>
            <li>
              <Link>How it works</Link>
            </li>
            <li>
              <Link>Roadmap</Link>
            </li>
            <li>
              <Link>API</Link>
            </li>
            <li>
              <Link>Price</Link>
            </li>
            <li>
              <Link>Models</Link>
            </li>
            <li>
              <button className="button-29">Login/Sign UP</button>
            </li>
          </ul>
        </div>
      )}
      <CiDark className="white" />
      <IoMdMenu className="icon" onClick={() => setShowSidebar(true)} />
    </section>
  );
};

export default Header;

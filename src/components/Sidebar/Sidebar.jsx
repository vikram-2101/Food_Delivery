import { Link } from "react-router-dom";
import "./Sidebar.css";
import { IoMdClose } from "react-icons/io";
const Sidebar = ({ setShowSidebar }) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <ul id="navbar-2">
          <li className="cross">
            <IoMdClose onClick={() => setShowSidebar(false)} />
          </li>
          <li>
            <Link>How it works</Link>
          </li>
          <li>
            <Link to="/">Features</Link>
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
    </div>
  );
};

export default Sidebar;

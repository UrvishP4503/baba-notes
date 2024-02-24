import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <Link style={{ textDecoration: "none" }} to={"/new/note"}>
        <div className="sidebar-new-note" style={{ width: "100%" }}>
          New Note
        </div>
      </Link>
      <Dropdown />
    </div>
  );
};

export default SideBar;

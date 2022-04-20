import { NavLink } from "react-router-dom";
import s from "./Nav.module.css";

const Nav = () =>{
  return(
    <nav className={s.nav}>
      <div><NavLink to="/Content" className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink></div>
      <div><NavLink to="/Dialogs" className = { navData => navData.isActive ? s.active : s.item }>Massages</NavLink></div>
      <div><NavLink to="/Users" className = { navData => navData.isActive ? s.active : s.item }>find Users</NavLink></div>
      <div><NavLink to="/News" className = { navData => navData.isActive ? s.active : s.item }>News</NavLink></div>
      <div><NavLink to="/Music" className = { navData => navData.isActive ? s.active : s.item }>Music</NavLink></div>
      <div><NavLink to="/Settings" className = { navData => navData.isActive ? s.active : s.item }>Settings</NavLink></div>
    </nav>
  )
}

export default Nav;
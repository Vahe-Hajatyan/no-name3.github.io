import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import logo from "./../../assets/images/logo512.png"

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src={logo} alt="img"></img>
      <div className={s.loginBlock}>
        {props.isAuth ? <div><button onClick={props.setLogout} className={s.floating_button}>Logout</button></div> : <NavLink className={s.floating_button} to="/Login">Login</NavLink>}
      </div>
    </header>
  );
};
//<button  onClick={props.setLogout}>Logout</button>
export default Header;

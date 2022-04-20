import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogItem = (props) => {
  return (
    <div className={s.Dialog + "" + s.active}>
      <NavLink to={"/Dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
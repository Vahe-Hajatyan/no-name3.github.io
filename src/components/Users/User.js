import s from "./users.module.css";
import usersPhoto from "../../assets/images/image.png";
import { NavLink } from "react-router-dom";

let User = ({ user, followingInProgress, getUnFollow, getFollow }) => { 
  return (
    <div className={s.grid}>
      <span>
        <div>
          <NavLink to={"/Content/" + user.id}>
            <img
              src={user.photos.small != null ? user.photos.small : usersPhoto}
              className={s.photo}
              alt="img"
            />
          </NavLink>
        </div>
        <div className={s.following}>
          {user.followed ? (
            <button
              className={s.button15}
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => getUnFollow(user.id)}
            >
              unfollow
            </button>
          ) : (
            <button
              className={s.button15}
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => getFollow(user.id)}
            >
              follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div className={s.cuttedText}>name: {user.name}</div>
          <div className={s.cuttedText}>status: {user.status === null ? "no status" : user.status}</div>
        </span>
      </span>
    </div>
  );
};

export default User;

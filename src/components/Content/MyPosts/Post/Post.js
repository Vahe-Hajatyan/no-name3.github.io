import s from "./Post.module.css";
import usersPhoto from "../../../../assets/images/image.png";

const Post = (props) => {
  return (
    <>
      <div className={s.item}>
        <div className={s.flex}>
          <img src={usersPhoto} alt="img" />
          <span>{props.massage}</span>
        </div>
      </div>
      <div>
        <button className={s.button}>{props.lake} like</button>
      </div>
    </>
  );
};

export default Post;

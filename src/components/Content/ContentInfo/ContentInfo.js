import Preloader from "../../common/Preloader/Preloader";
import ContentStatusWithHooks from './ContentStatusWithHooks';
import usersPhoto from "../../../assets/images/image.png";
import s from "./ContentInfo.module.css";


const ContentInfo = (props) => {

  if (!props.content) {
    return <Preloader />
  }
  return (
    <div>
      {/*<div>
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="img"/>
      </div>*/}
      <div>
        <img className={s.photos} src={props.content.photos.small === null ? usersPhoto : props.content.photos.small} alt="img"/>
        <ContentStatusWithHooks status={props.status.data === undefined ? props.status : props.status.data} updateStatus={props.updateStatus}/>
        <p>full name: {props.content.fullName}</p>
        <p>about me: {props.content.aboutMe}</p>
        <p>looking for jobs: {props.content.lookingForAJob !== false ? "yes" : "no"}</p>
      </div>
    </div>
  );
};

export default ContentInfo;

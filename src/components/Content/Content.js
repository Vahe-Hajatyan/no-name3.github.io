import ContentInfo from "./ContentInfo/ContentInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Content = (props) => {
  return (
    <div>
    
      <ContentInfo content={props.content} status={props.status} updateStatus={props.updateStatus}/>
      <MyPostsContainer/>

    </div>
  );
};

export default Content;

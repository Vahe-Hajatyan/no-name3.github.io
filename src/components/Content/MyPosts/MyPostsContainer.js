import { connect } from "react-redux";
import {addPostCreator} from "./../../../redux/contentReducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    Posts: state.contentPage.Posts,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newAddText) => {
      dispatch(addPostCreator(newAddText));
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (MyPosts);
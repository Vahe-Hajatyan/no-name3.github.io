import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from 'redux-form';
import {maxLengthCreator, required, minLengthCreator} from './../../../utils/validator';
import {Input} from './../../common/FormsControls/FormsControls'

const maxLengthCreator10 = maxLengthCreator(10);
const minLengthCreator2 = minLengthCreator(2);

const MyPostsForm = (props) => {
  const { handleSubmit, reset} = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <Field className={s.input} placeholder='new post' name="input" validate={[required, maxLengthCreator10, minLengthCreator2]} component={Input} />
        </div>
        <div>
          <button className={s.button15}>add Post</button>
          <button className={s.button15} type="button" onClick={reset}>delete</button>
        </div>
      </div>
    </form>
  );
};

const MyPostsReduxForm = reduxForm({ form: "newAddText",})(MyPostsForm);

const MyPosts = (props) => {
  let Posts = props.Posts.map((massage) => (
    <Post massage={massage.massages} lake={massage.lake} />
  ));

  let onAddPost = (values) => {
    props.addPost(values.input);
  };

  return (
    <div>
      <h3>my post</h3>
      <MyPostsReduxForm onSubmit={onAddPost} />
      <div className={s.posts}>{Posts}</div>
    </div>
  );
};

export default MyPosts;

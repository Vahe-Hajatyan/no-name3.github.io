import React from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from 'redux-form';
import {required} from './../../utils/validator';
import {Input} from './../common/FormsControls/FormsControls'
import { setLogin } from "../../redux/authReducer";
import { Navigate } from "react-router-dom";
import s from './../common/FormsControls/FormControls.module.css'
import l from './Login.module.css';

const LoginForm = ({captchaURL, ...props}) => {
  return (
    <form className={l.login_form} onSubmit={props.handleSubmit}>
      <div className={l.label}>email</div>
      <Field className={l.input} placeholder='email' name="email" validate={[required]} component={Input} type={"email"} />
      <div className={l.label}>password</div>
      <Field className={l.input} placeholder='password' name="password" validate={[required]} component={Input} type={"password"} />
      <label>
      <Field className={l.checkbox} name="rememberMe"  component={'input'} type={"checkbox"} />
      <span>Remember me</span>
      </label>
      <button className={l.button}>Login</button>
      {props.error && <div className={s.formSummaryError}>
        {props.error}
      </div>}
      {captchaURL && <div><img className={l.captcha} src={captchaURL} alt='img'/></div>}
      {captchaURL && <Field placeholder="Symbols from images" name="captcha" validate={[required]} component={Input} />}
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login",})(LoginForm);

const Login = (props) => {
  
  let onSubmit = (FormData) => {
    props.setLogin(FormData.email,  FormData.password, FormData.rememberMe, FormData.captcha)
  };

  if(props.isAuth){
    return <Navigate to='/Content'/>
  }
  return (
    <div className={l.Login}>
      <div className={l.header}>
        Login
      </div>
      <LoginReduxForm onSubmit={onSubmit} captchaURL={props.captchaURL} />
      <div className={l.footer}>
        <p>если вы не зарегистрированы то регистрируетесь <a href="https://social-network.samuraijs.com/signUp" target='_blank' rel="noreferrer">здесь</a></p>
      </div>
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    captchaURL: state.auth.captchaURL,
  };
};

export default connect(mapStateToProps, {setLogin})(Login);

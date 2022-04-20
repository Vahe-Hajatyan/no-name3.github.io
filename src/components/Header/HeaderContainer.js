import Header from "./Header";
import React from "react";
import { connect } from "react-redux";
import {getAuth} from './../../redux/authReducer';
import {setLogout, } from './../../redux/authReducer'



class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    id: state.auth.id,
    email: state.auth.email,
    login: state.auth.login,
  }
}
export default connect(mapStateToProps, {getAuth, setLogout})(HeaderContainer);

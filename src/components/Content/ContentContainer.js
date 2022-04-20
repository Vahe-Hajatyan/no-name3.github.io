import React from "react";
import { getContent, getStatus, updateStatus } from "./../../redux/contentReducer";
import { connect } from "react-redux";
import Content from "./Content";
import {withAuthNavigate} from './../../hoc/withAuthNavigate'
import {compose} from 'redux'; 
import { useParams } from "react-router-dom";

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  return <WrappedComponent {...props} params={params} />;
};

class ContentContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.params.userId;
    if (!userId) {
      userId = this.props.Id;
    }
    this.props.getContent(userId);
    this.props.getStatus(userId);
  }
  render() {
    return <Content {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  content: state.contentPage.content,
  status: state.contentPage.status,
  Id: state.auth.id,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, { getContent, getStatus, updateStatus }),
  withRouter,
  withAuthNavigate 
)(ContentContainer);
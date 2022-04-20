import { connect } from 'react-redux';
import {getUsersThunk, getFollow, getUnFollow,} from './../../redux/UsersReducer';
import React from 'react';
import Users from './Users';
import Preloader from './../common/Preloader/Preloader'
//import {withAuthNavigate} from './../../hoc/withAuthNavigate';
import {compose} from 'redux'; 
import {getUsers, pageSize, totalItemsCount, currentPage, isFetching, followingInProgress} from './../../redux/usersSelectors'


class UsersAPI extends React.Component {
  componentDidMount() {
    const {currentPage, pageSize} = this.props;
    this.props.getUsersThunk(currentPage, pageSize);
  }
  
  onPageChanged = (currentPage) => {
    this.props.getUsersThunk(currentPage, this.props.pageSize);
  };

  render() {
    return (
      <>
      {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalItemsCount={this.props.totalItemsCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          onPageChanged={this.onPageChanged}
          followingInProgress={this.props.followingInProgress}
          getFollow={this.props.getFollow}
          getUnFollow={this.props.getUnFollow}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: pageSize(state),
    totalItemsCount: totalItemsCount(state),
    currentPage: currentPage(state),
    isFetching:  isFetching(state),
    followingInProgress: followingInProgress(state),
  }
}

export default compose(
  //withAuthNavigate,
  connect(mapStateToProps, {getFollow, getUnFollow, getUsersThunk,})
)(UsersAPI)
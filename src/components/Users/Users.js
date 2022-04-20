import Paginator from "./../common/paginator/paginator";
import User from "./User";

let Users = (props) => {
  return (
    <div>
      <Paginator
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
        totalItemsCount={props.totalItemsCount}
        pageSize={props.pageSize}
      />
      {props.users.map( u => <User user={u} followingInProgress={props.followingInProgress} getUnFollow={props.getUnFollow} getFollow={props.getFollow} key={u.id} />)}
    </div>
  );
};

export default Users;

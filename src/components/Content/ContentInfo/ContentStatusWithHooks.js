import React, { useState, useEffect } from "react";

const ContentStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect( () => {
    setStatus(props.status);
  }, [props.status] )

  const activateEditMode = () => {
    setEditMode(true);
  }
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  }

  return (
    <div>
      {!editMode &&
        <div>
          <span>user status: </span>
          <samp onClick={activateEditMode}>
            {status || "NO STATUS :("}
          </samp>
        </div>
      }
      {editMode &&
        <div>
          <span>user status: </span>
          <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
        </div>
      }
    </div>
  );
};

export default ContentStatusWithHooks;

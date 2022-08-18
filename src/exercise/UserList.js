import React from "react";

const UserList = (props) => {
  return (
    <div>
      이름 : {props.name}
      나이 : {props.age}
    </div>
  );
};

export default UserList;

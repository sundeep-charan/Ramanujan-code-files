import React from "react";

const User = ({ currentUser }) => {
  let userComp = <h1>Please specifiy user !!!</h1>;
  if (currentUser !== undefined) {
    userComp = (
      <div>
        <p>Name: {currentUser.name}</p>
        <p>Email: {currentUser.email}</p>
        <p>
          Address:{" "}
          {`${currentUser.address.street} ${currentUser.address.suite} ${currentUser.address.city}`}
        </p>
      </div>
    );
  }
  return userComp;
};

export default User;

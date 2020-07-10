import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { logOut } from "../redux/actions/userActions";

const navBarStyles = {
  width: "100vw",
  height: "5rem",
  background: "black",
  color: "white"
};

const NavBar = ({ user, logOut, history, ...restProps }) => {
  console.log(restProps);
  const handleLogout = () => {
    logOut();
    history.push("/login");
  };

  return (
    <div style={navBarStyles}>
      {user !== null ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <Link to="/login">
          <button>Login</button>
        </Link>
      )}
    </div>
  );
};

const mapStateToProps = storeState => {
  return {
    user: storeState.userState.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));

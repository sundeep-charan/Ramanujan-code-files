import React from "react";
import { Navbar, Nav, NavItem } from "reactstrap";
import { connect } from "react-redux";
import config from "../config";
import { logOutUser } from "../redux/actions/userActions";
import { NavLink, Link } from "react-router-dom";
import { GoogleLogout } from "react-google-login";

const MTubeNavBar = ({ user, logOutUser }) => {
  const handleLogoutFailure = err => {
    console.error(err);
  };

  const handleLogoutSuccess = () => {
    alert("Logged out successfully");
    logOutUser();
  };

  return (
    <Navbar color="light" light expand="md">
      <Link to="/">reactstrap</Link>
      <Nav className="ml-auto" navbar>
        {!user ? (
          <NavItem>
            <NavLink className="ml-3" to="/login">
              Login
            </NavLink>
          </NavItem>
        ) : (
          <>
            <NavItem>
              <NavLink to="/profile/">Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/playlists/">My Playlists</NavLink>
            </NavItem>
            <GoogleLogout
              clientId={config.CLIENT_ID}
              buttonText="Logout"
              onLogoutSuccess={handleLogoutSuccess}
              onFailure={handleLogoutFailure}
            />
          </>
        )}
      </Nav>
    </Navbar>
  );
};

const mapStateToProps = storeState => {
  return {
    user: storeState.userState.user
  };
};

export default connect(mapStateToProps, { logOutUser })(MTubeNavBar);

import React from "react";
import { Jumbotron, Button } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const ProfilePage = ({ user }) => {
  return user ? (
    <div>
      <Jumbotron>
        <img
          src={user.imageUrl}
          alt="Profile pic"
          style={{ width: 150, height: 150, borderRadius: "50%" }}
        />
        <h1 className="display-3">{user.name}</h1>
        <p className="lead">Email: {user.email}</p>
        <hr className="my-2" />
        <p className="lead">
          <Link to="/playlists">
            <Button color="primary">View Playlists</Button>
          </Link>
        </p>
      </Jumbotron>
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

const mapStateToProps = storeState => {
  return {
    user: storeState.userState.user
  };
};

export default connect(mapStateToProps)(ProfilePage);

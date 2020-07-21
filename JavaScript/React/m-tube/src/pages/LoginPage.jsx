import React from "react";
import { GoogleLogin } from "react-google-login";
import config from "../config";
import { setUser } from "../redux/actions/userActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const LoginPage = ({ user, setUser }) => {
  const responseGoogle = response => {
    if (response.error) {
      console.error(response.error);
    }
    setUser({ ...response.profileObj, ...response.tokenObj });
  };

  if (user) return <Redirect to="/" />;

  return (
    <div>
      <GoogleLogin
        clientId={config.CLIENT_ID}
        isSignedIn={true}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        scope="https://www.googleapis.com/auth/youtube"
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

const mapStateToProps = storeState => {
  return {
    user: storeState.userState.user
  };
};

export default connect(mapStateToProps, { setUser })(LoginPage);

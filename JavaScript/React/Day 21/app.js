class UserList extends React.Component {
  render() {
    // return <div>{this.props.children}</div>;
    return users.map(user => <li key={user.id}>{user.name}</li>);
  }
}

const users = [
  { id: 1, name: "Name 1" },
  { id: 2, name: "Name 2" }
];

class Togglable extends React.Component {
  state = {
    isToggled: false
  };

  handleClick = () => {
    this.setState({ isToggled: !this.state.isToggled });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me to hide the content</button>
        {this.state.isToggled ? this.props.children : null}
      </div>
    );
  }
}

class Form extends React.Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="form">
        {this.props.children({
          ...this.state,
          handleChange: this.handleChange
        })}
      </div>
    );
  }
}

const App = () => {
  return (
    <div className="App">
      <Form>
        {state => (
          <>
            <input
              type="text"
              name="name"
              id="name"
              value={state.name}
              onChange={state.handleChange}
            />
            <input
              type="email"
              name="email"
              id="email"
              value={state.email}
              onChange={state.handleChange}
            />
          </>
        )}
      </Form>
      {/* <Togglable>
        <UserList users={users} />
      </Togglable> */}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

// ----------------------------------------------------------------------------------
import { connect } from "react-redux";

const VideoListContainer = ({ videos }) => <VideoList videos={videos} />;
const mapStateToProps = storeState => {
  return {
    videos: storeState.videoState.videos
  };
};
export default connect(mapStateToProps)(VideoList);

// ----------------------------------------------------------------------------------
const VideoList = ({ videos }) => {
  return (
    <div>
      {videos.map(video => (
        <VideoListItem video={video} key={video.id} />
      ))}
    </div>
  );
};

const ImageWrapper = ({ color }) => {
  return <div style={{ color }}></div>;
};

// VideoListContainer => VideoList

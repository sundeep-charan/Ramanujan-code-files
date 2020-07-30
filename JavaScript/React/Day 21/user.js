// -----------------------ImageWrapper.js----------------------------------------------
// import PropTypes from 'prop-types'
class ImageWrapper extends React.Component {
  render() {
    return <img src={this.props.image} alt="Image" />;
  }
}

ImageWrapper.defaultProps = {
  image: "Hi there"
};

// ------------------------------App.js----------------------------------------------
const App = () => {
  return (
    <div className="App">
      <ImageWrapper />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

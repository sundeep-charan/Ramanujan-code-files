// Custom code.
class Something extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.inputRef);
  }

  componentDidUpdate() {
    console.log("Updating");
  }

  handleClick = event => {
    const inputElement = this.inputRef.current;
    inputElement.focus();
  };

  render() {
    return (
      <div>
        Hi I am using Refs.
        <input type="text" name="name" ref={this.inputRef} />
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

class Something2 extends React.Component {
  constructor(props) {
    super(props);
    this.textRef = React.createRef();
    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    console.log(this.inputRef);
  }

  componentDidUpdate() {
    // const divElement = this.textRef.current; // Object containing input element
    const divElement = this.textRef; // Input element
    const { width, height } = divElement.getBoundingClientRect();
    console.log(width, height);
  }

  handleChange = event => this.setState({ content: event.target.value });

  render() {
    return (
      <>
        {/* <div
          style={{ display: "inline-block" }}
          ref={this.textRef}
        > */}
        <div
          style={{ display: "inline-block" }}
          ref={domElement => (this.textRef = domElement)}
        >
          {this.state.content}
        </div>
        <input
          type="text"
          value={this.state.content}
          onChange={this.handleChange}
        />
      </>
    );
  }
}

const FileInput = () => {
  const [file, setFile] = React.useState("");

  const handleChange = event => {
    setFile([...event.target.files][0]);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("codingChallenge", file);
    formData.append("name", "Sundeep Charan");
    axios.post("/api/upload", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" value={file} onChange={handleChange} />
    </form>
  );
};

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.nameRef = React.createRef();
    this.emailRef = React.createRef();
  }

  handleSubmit = event => {
    event.preventDefault();
    const inputElement = this.nameRef.current;
    const emailElement = this.emailRef.current;
    console.log(inputElement.value, emailElement.value);
  };

  componentDidUpdate() {
    console.log("Hi there");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="name" ref={this.nameRef} />
        <input type="email" name="email" ref={this.emailRef} />
        <input type="submit" value="Register" />
      </form>
    );
  }
}

const InputField = React.forwardRef((props, ref) => {
  console.log(props, ref);
  const { name, type, placeholder } = props;
  return <input ref={ref} name={name} type={type} placeholder={placeholder} />;
});

class RegisterForm2 extends React.Component {
  constructor(props) {
    super(props);
    this.nameRef = React.createRef();
    this.emailRef = React.createRef();
  }

  handleSubmit = event => {
    event.preventDefault();
    const nameElement = this.nameRef.current;
    // const emailElement = this.emailRef.current;
    console.log(nameElement.value);
  };

  componentDidUpdate() {
    console.log("Hi there");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <InputField
          name="name"
          type="text"
          placeholder="John Doe"
          ref={this.nameRef}
        />
        <input type="submit" value="Register" />
      </form>
    );
  }
}

// App component
const App = () => (
  <div className="App">
    {/* <Something /> */}
    {/* <RegisterForm /> */}
    {/* <Something2 /> */}
    {/* <RegisterForm2 /> */}
    <FileInput />
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);

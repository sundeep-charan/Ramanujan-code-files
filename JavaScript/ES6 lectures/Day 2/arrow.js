function outer() {
  console.log(this);
  const inner = () => {
    console.log(this);
  };
  inner();
}

function something() {
  const obj = {
    name: "sundeep",
    job: "instrucotr",
    greet: () => {
      console.log(this);
    }
  };

  obj.greet();
}

something();

outer();

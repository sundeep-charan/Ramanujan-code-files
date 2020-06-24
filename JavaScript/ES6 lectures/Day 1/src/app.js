const something = "hi there";
for (let i of [1, 2, 3, 4]) {
}

const someFunc = () => "Hi there func";

const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const response2 = await response.json();
  return response2;
};

fetchData().then(res => console.log(res));

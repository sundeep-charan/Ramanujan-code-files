console.log("Connected");
import axios from "axios";
// fetch("", {
//   method: "",
//   body: JSON.stringify({}),
//   headers: {
//     "Content-Type": "application/json"
//   }
// })
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

var baseURL = "https://reqres.in";
// axios
//   .get(`${baseURL}/api/users`)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

axios
  .post(`${baseURL}/api/users`, {
    name: "Sundeep Charan Ramkumar",
    job: "instructor"
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (err) {
    console.log(err);
  });

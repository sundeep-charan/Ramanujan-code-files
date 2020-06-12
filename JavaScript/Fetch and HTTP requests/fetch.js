console.log("Connected");

var sundeep = { name: "Sundeep", role: "instructor" };

var proxyURL = "https://corsanywhere.herokuapp.com/";
// fetch(proxyURL + "https://github.com")
//   .then(function (response) {
//     return response.text();
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

var baseURL = `https://reqres.in`;

// Getting all users
fetch(`${baseURL}/api/users`, {
  method: "GET"
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.data);
  });

// Create a new user
var newUser = { name: "sundeep", job: "instructor" };
fetch(`${baseURL}/api/users`, {
  method: "POST",
  body: JSON.stringify(newUser),
  headers: {
    "Content-Type": "application/json"
  }
})
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);
  });

// Update a user
var updatedUser = { name: "charan", job: "instructor" };
fetch(`${baseURL}/api/users/439`, {
  method: "PUT",
  body: JSON.stringify(updatedUser),
  headers: {
    "Content-Type": "application/json"
  }
})
  .then(function (res) {
    console.log(res);
    return res.json();
  })
  .then(function (data) {
    console.log(data);
  });

// Delete a user
fetch(`${baseURL}/api/users/439`, {
  method: "DELETE"
}).then(function (res) {
  console.log("Deleted");
});

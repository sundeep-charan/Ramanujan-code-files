console.log("Connected");
//localStorage.clear();

function successCallback(position) {
  console.log(position);
}

function errorCallback(err) {
  console.log(err);
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
} else {
  console.log("OOPS. My bad :(");
}

var corsErrorRemoveURL = "https://corsanywhere.herokuapp.com/";
// var corsErrorRemoveURL = ""

// Cache the users using localstorage.

function fetchPosts() {
  // Trying to check whether a key called "users" exist.
  var users = localStorage.getItem("users");
  // Checking area
  if (users !== null) {
    console.log("Fetching from cache");
    // Converting string (JSON) to Javascript objects
    var usersArray = JSON.parse(users);
    // return new Promise(function (resolveFunction) {
    //   resolveFunction(usersArray);
    // });

    // Alliter
    return Promise.resolve(usersArray);
  } else {
    console.log("Fetching from server");
    var usersPromise = fetch(corsErrorRemoveURL + "https://reqres.in/api/users")
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        return response.data;
      })
      .then(function (response) {
        console.log(typeof response);
        // Convert into JSON
        var responseJSON = JSON.stringify(response);
        // Storage into LOCAL
        localStorage.setItem("users", responseJSON);
        return response;
      })
      .catch(function (err) {
        console.log(err);
      });
    return usersPromise;
  }
}

fetchPosts()
  .then(function (users) {
    console.log(users);
  })
  .catch(function (err) {
    console.log(err);
  });

// sessionStorage.setItem("temp", "value");

// localStorage.setItem("name", "Sundeep Charan Ramkumar");
// localStorage.getItem("")
// localStorage.removeItem("")

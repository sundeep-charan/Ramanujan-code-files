console.log("Connected");

const createPromise = value => new Promise(res => res(value));
const promise1 = createPromise(1);
const promise2 = createPromise(2);
const promise3 = createPromise(3);
const promises = [promise1, promise2, promise3];

const fetchData = async () => {
  try {
    const dataArray = await Promise.all(promises);
    console.log(dataArray);
  } catch (err) {
    console.error(err);
  }
};

/** Promise.all(promises)
 *  .then(values => console.log(values))
 *  .catch(err => console.error(err)) */

fetchData();

const API_BASE_URL = `https://reqres.in`;
// Async functions simplify the promise consumptions to behave like synchronous code
// You can catch the errors with the help of try catch block
// IMPORTANT: It returns a promise by default. You can make use of it by using the return keyword.
const fetchUsers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users`);
    const responseJSON = await response.json();
    return responseJSON.data;
  } catch (err) {
    console.error(err.message);
  }
};

fetchUsers().then(users => console.log(users));

/* 
fetch(`${API_BASE_URL}/api/users`)
  .then(res => console.log(res))
  .then(res => res.json())
  .catch(err => console.log(err))
*/

/* Higher order methods */
// forEach
// map
// filter
// reduce

const users = [
  {
    id: 1,
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
  },
  {
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
  },
  {
    id: 3,
    email: "emma.wong@reqres.in",
    first_name: "Emma",
    last_name: "Wong",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
  },
  {
    id: 4,
    email: "eve.holt@reqres.in",
    first_name: "Eve",
    last_name: "Holt",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
  },
  {
    id: 5,
    email: "charles.morris@reqres.in",
    first_name: "Charles",
    last_name: "Morris",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
  },
  {
    id: 6,
    email: "tracey.ramos@reqres.in",
    first_name: "Tracey",
    last_name: "Ramos",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
  }
];

users.forEach(function (element, index) {
  // console.log(element, index);
});

// Input - [1, 4, 5, 8, 4, 3, 9]
// Output - [1, 16, 25, 64, 16, 9, 81]

const outputArray = [];
const inputArray = [1, 4, 5, 8, 4, 3, 9];
for (everyNumber of inputArray) {
  const square = everyNumber ** 2;
  outputArray.push(square);
}

const output1Array = [];
const input1Array = [1, 4, 5, 8, 4, 3, 9];
for (everyNumber of input1Array) {
  if (everyNumber % 2 === 0) output1Array.push(everyNumber);
}

const result = inputArray.map(element => element ** 2);
const namesArray = users.map(user => {
  return {
    id: user.id,
    name: `${user.first_name} ${user.last_name}`
  };
});

const filteredUsersArray = users.filter(function (user) {
  return user.id % 2 === 0;
});

// const filteredUsersArray = users.filter(user => user.id % 2 === 0);
console.log(filteredUsersArray);

console.log(namesArray);
console.log(outputArray, result);

// Input - [1, 4, 5, 8, 4, 3, 9]
// Output - 34
let sum = 0;
const input2Array = [1, 4, 5, 8, 4, 3, 9];
for (everyNumber of input2Array) {
  sum = sum + everyNumber;
}

// Accumulator, Current element, current element position
const sum2 = input2Array.reduce(function (acc, number) {
  acc = acc + number;
  return acc;
}, 0);

const sum3 = input2Array.reduce((acc, number) => (acc += number), 0);

// Iteration 2: 4
// Acc: 1

// New acc: 1 + 4 => 5

// Iteration 3: 5
// Acc: 5

// New acc: 5 + 5 => 10

// Iteration 4: 8
// Acc: 10

// New acc: 10 + 8 => 18

// Iteration 5: 4
// Acc: 18

// New acc: 18 + 4 => 22

// Iteration 6: 3
// Acc: 22

// New acc: 22 + 3 => 25

// Iteration 7: 9
// Acc: 25

// New acc: 25 + 9 => 34

console.log("Sum is ", sum, sum2);

// Input: ["apples", "grapes", "oranges", "bananas", "apples", "mosambis", "oranges", "bananas", "kiwis", "pomegranates", "grapes", "apples"]

/* Output: {
  "apples": 3,
  "grapes": 2,
  "oranges": 2,
  "bananas": 2,
  "mosambis": 1,
  "kiwis": 1,
  "pomegranates": 1
} */

const counterObj = {};
const fruits = [
  "apples",
  "grapes",
  "oranges",
  "bananas",
  "apples",
  "mosambis",
  "oranges",
  "bananas",
  "kiwis",
  "pomegranates",
  "grapes",
  "apples"
];

for (everyFruit of fruits) {
  // If the fruit property is existing inside the object, then increment its value by 1.
  if (counterObj.hasOwnProperty(everyFruit)) {
    counterObj[everyFruit] = counterObj[everyFruit] + 1;
  }
  // Else create that property and initialize its value as 1.
  else {
    counterObj[everyFruit] = 1;
  }
}

const freqCounter = fruits.reduce(function (acc, fruitName) {
  acc[fruitName] = (acc[fruitName] || 0) + 1;
  return acc;
}, {});

console.log(counterObj, freqCounter);

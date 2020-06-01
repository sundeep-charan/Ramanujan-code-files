console.log("Connected");

// Array
var sampleArray = [1, "hi there", 1.44, false, undefined];
var newArray = sampleArray;
newArray[1] = "hello there";
console.log(newArray, sampleArray);

// Indexing ..
sampleArray[3] = "something"; // => writing something
console.log(sampleArray[1]); // => reading something

// Traversing an array
var oneDimensionalArray = [4, 6, 8, 10, 12, 14];

// for (
//   var index = 0;
//   index <= oneDimensionalArray.length - 1;
//   index = index + 1
// ) {
//   console.log(oneDimensionalArray[index], "Current Index " + index);
// }

// for of loop
for (value of oneDimensionalArray) {
  console.log(value);
}

// Object
var sundeep = {
  name: "Sundeep Charan Ramkumar",
  age: 21,
  location: "Coimbatore",
  isMacHolder: true,
};

console.log(sundeep);

// Traversing through an object
for (fieldName in sundeep) {
  if (fieldName === "isMacHolder") {
    console.log("We have reached the limit");
    break;
  }
  console.log(typeof fieldName, sundeep[fieldName]); // sundeep["name"] // sundeep["age"]
  // sundeep ["location"]
}

for (index in oneDimensionalArray) {
  console.log(index, typeof index);
}

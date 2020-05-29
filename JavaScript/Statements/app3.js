// Entry check
// For loop
console.log("For loop");
for (var counter = 10; counter >= 1; counter = counter - 1) {
  console.log(counter);
}

// While loop
console.log("While loop");
var anotherCounter = 100;
while (anotherCounter <= 10) {
  console.log(anotherCounter);
  anotherCounter = anotherCounter + 1;
}

// Exit check loop
console.log("Do While loop");
var anotherCounter = 100;
do {
  console.log(anotherCounter);
  anotherCounter = anotherCounter + 1;
} while (anotherCounter <= 10);

// Bag size problem
var bagSize = 100;
var itemSize = 0;

while (itemSize < bagSize) {
  itemSize = parseInt(prompt("Enter your item size"));
  if (itemSize > bagSize) {
    alert("You have exceeded the bag limit");
    break;
  }
  alert("You can still fill the bag. Current bag size " + (bagSize - itemSize));
  bagSize = bagSize - itemSize;
  itemSize = 0;
}

var age = prompt("Enter your age");
age >= 18 ? alert("Elgiible to vote") : alert("Not eligible");

if (age >= 18) {
  alert("Elgiible to vote");
} else {
  alert("Not eligible");
}

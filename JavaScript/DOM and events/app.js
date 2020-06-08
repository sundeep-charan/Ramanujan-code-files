// var h1Elements = document.getElementsByTagName("h1");
// console.log(h1Elements);

// var divContainers = document.getElementsByClassName("container");
// console.log(divContainers);

// var spanUnique = document.getElementById("unique");
// console.log(spanUnique);

// querySelector
// querySelectorAll

var firstH1Element = document.querySelector(".jazz");
console.log(firstH1Element);

var h1Elements = document.querySelectorAll("h1");
console.log(h1Elements);

var uniqueSpan = document.querySelector("#unique");
console.log(uniqueSpan);

var childElementsofContainer = document.querySelectorAll(".container *");
console.log(childElementsofContainer);

document.querySelectorAll(".hero > span");




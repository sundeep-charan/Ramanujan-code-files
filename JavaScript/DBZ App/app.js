import axios from "axios";

// DOM Elements
var dbzCardContainer = find(".container__characters");
var loader = find(".loader");

// Variables
var corsErrorRemovalURL = `https://corsanywhere.herokuapp.com/`;
var baseURL = `https://dragon-ball-api.herokuapp.com/`;

function find(selector) {
  return document.querySelector(selector);
}

function findAll(selector) {
  return document.querySelectorAll(selector);
}

function renderHTML(dbzCharacters) {
  for (var character of dbzCharacters) {
    var characterHTML = `<div data-name=${character.name} class="container__character container__character--1">
    <img
      class="container__character-image"
      src=${character.image}
      alt="Character"
    />
    <p class="container__character-name"><span>Name:</span> ${character.name}</p>
    <p class="container__character-gender"><span>Gender:</span> ${character.gender}</p>
    <p class="container__character-planet">
      <span>Planet:</span> ${character.planet}
    </p>
  </div>`;

    dbzCardContainer.insertAdjacentHTML("beforeend", characterHTML);
  }
}

function fetchDBZCharacters() {
  loader.style.display = "block";
  var characters = localStorage.getItem("characters");
  if (characters) {
    return Promise.resolve(JSON.parse(characters));
  }
  var dbzPromise = axios
    .get(`${corsErrorRemovalURL}${baseURL}/api/character`)
    .then(function (res) {
      var constructedData = [];
      var dbzCharacters = res.data;
      for (var character of dbzCharacters) {
        var characterObj = {
          name: character.name,
          planet: character.originPlanet,
          image: character.image.replace("../", baseURL),
          gender: character.gender
        };
        constructedData.push(characterObj);
      }
      localStorage.setItem("characters", JSON.stringify(constructedData));
      return constructedData;
    })
    .catch(function (err) {
      console.log(err);
    });

  return dbzPromise;
}

function fetchDBZSingleCharacter(characterName) {
  var indiSection = find("#individual");
  indiSection.querySelector("h1").textContent = characterName;
}

function checkValidHash() {
  if (
    window.location.hash !== "#home" &&
    window.location.hash !== "#individual"
  ) {
    window.location.hash = "#home";
  }
}

function renderPage(hashValue) {
  // Make the section visible
  find(hashValue).style.display = "block";
  if (hashValue === "#home") {
    fetchDBZCharacters().then(function (characters) {
      loader.style.display = "none";
      renderHTML(characters);
    });
  }
}

function init() {
  checkValidHash();
  // Rendering that page alone
  renderPage(window.location.hash);
}

window.addEventListener("hashchange", function () {
  console.log(window.location.hash);
  // Check and redirect to correct hash
  checkValidHash();
  // Resetting both the pages' style property
  find("#home").style.display = "none";
  find("#individual").style.display = "none";
  // Rendering that page alone
  renderPage(window.location.hash);
});

// To select a individual card, you have to follow this strategy.
dbzCardContainer.addEventListener("click", function () {
  var isCardClicked = event.target.matches(
    ".container__character, .container__character *"
  );
  // If the selection is inside a card, then only you have to fetch the details
  if (isCardClicked) {
    var containerCard = event.target.closest(".container__character");
    var characterName = containerCard.dataset.name;
    console.log(characterName);
    window.location.hash = "#individual";
    fetchDBZSingleCharacter(characterName);
  }
});

// Start of the program
init();

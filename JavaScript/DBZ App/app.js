import axios from "axios";

// DOM Elements
var indiSection = find("#individual");
var homeSection = find("#home");
var dbzCardContainer = find(".container__characters");
var homeLoader = find("#home .loader");
var indiLoader = find("#individual .loader");

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

function renderIndiHTML(character) {
  indiSection.querySelector(".loader").style.display = "none";
  var indiHTML = `<div class="character__container">
  <img
    src="${character.image.replace("../", baseURL)}"
    alt="Character"
    class="character__container-image"
  />
  <div class="character__container-details">
    <p class="container__character-name">
      <span>Name:</span> ${character.name}
    </p>
    <p class="container__character-gender">
      <span>Gender:</span> ${character.gender}
    </p>
    <p class="container__character-status">
      <span>Status:</span> ${character.status}
    </p>
    <p class="container__character-planet">
      <span>Planet:</span> ${character.originPlanet}
    </p>
    <p class="container__character-species">
      <span>Planet:</span> ${character.species}
    </p>
  </div>
</div>`;

  indiSection.insertAdjacentHTML("afterbegin", indiHTML);
}

function fetchDBZCharacters() {
  homeLoader.style.display = "block";
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
  indiSection.innerHTML = `<div class="loader" style="display: none;">Loading...</div>`;
  // 1. Switch on the loading
  indiSection.querySelector(".loader").style.display = "block";
  // 2. Fetch character data
  return axios(
    `${corsErrorRemovalURL}${baseURL}/api/character/${characterName}`
  ).then(function (response) {
    console.log(response);
    return response.data;
  });
}

function checkValidHash() {
  if (window.location.hash !== "#home") {
    window.location.hash = "#home";
  }
}

function renderPage(hashValue) {
  // Make the section visible
  var changedHashValue = hashValue.replace("#", "");
  if (hashValue === "#home") {
    homeSection.style.display = "block";
    fetchDBZCharacters().then(function (characters) {
      homeLoader.style.display = "none";
      renderHTML(characters);
    });
  } else {
    indiSection.style.display = "block";
    var characterName =
      changedHashValue[0].toUpperCase() + changedHashValue.slice(1);
    fetchDBZSingleCharacter(characterName).then(function (character) {
      if (character === null) {
        indiSection.querySelector(".loader").style.display = "none";
        window.location.hash = "#home";
        return alert("Character not found");
      }
      renderIndiHTML(character);
    });
  }
}

function init() {
  // checkValidHash();
  // Rendering that page alone
  renderPage(window.location.hash);
}

window.addEventListener("hashchange", function () {
  console.log(window.location.hash);
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
    window.location.hash = `#${characterName}`;
  }
});

// Start of the program
init();

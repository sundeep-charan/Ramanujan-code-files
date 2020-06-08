console.log("Connected");
var h1Tag = document.querySelector("h1");
console.log("This is h1 tag" + h1Tag);
// Insert text content
h1Tag.textContent = null;

var scriptElement = document.querySelector("script");
var something = document.querySelector(".something");
something.children[1].remove();
var liELement1 = document.createElement("li"); // <li></li>
liELement1.textContent = "List Item 1"; // <li>List Item 1</li>
something.insertAdjacentElement("beforeend", liELement1); // <uL><li>list item 1</li></uL>

// Inserting HTML Elements
var divElement = document.createElement("div"); // <div></div>
var ulTag = document.createElement("ul"); // <ul></ul>
var liELement1 = document.createElement("li"); // <li></li>
liELement1.textContent = "List Item 1"; // <li>List Item 1</li>
ulTag.appendChild(liELement1); // <ul><li>List Item 1</li></ul>

/* <div>
    <ul></ul>
  </div> */

// 1. Appending child elements (Adding before the closing tag)
// parentElement.append(childElement)
divElement.append(ulTag); // <div><ul><li>List Item 1</li></ul></div>

console.log(divElement);

// 2. Prepending child elements (Adding after the opening tag)
// parentElement.prepend(childElement)
// divElement.prepend();

// 3. Insert adjacent element
// beforeBegin, beforeEnd, afterBegin, afterEnd

// Insert HTML as strings
var htmlBlock = `
  <div class="htmlblock" data-weather="rainy">
    <p style="color: red; background: green;">lorem ipsum generator text</p>
    <span>Hi there I am a span tag</span>
  </div>
`;

document.body.innerHTML = `${document.body.innerHTML}<h1>Hi there</h1>`;

console.log(typeof htmlBlock);

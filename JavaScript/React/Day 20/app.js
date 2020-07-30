const searchInput = document.querySelector("input");

const debounce = (eventHandler, timeDelay) => {
  let timeOutId = null;
  return function (...args) {
    if (timeOutId !== null) clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      eventHandler(...args);
    }, timeDelay);
  };
};

const inputHandler = e => {
  console.log(e.target.value);
};

searchInput.addEventListener("input", debounce(inputHandler, 1000));

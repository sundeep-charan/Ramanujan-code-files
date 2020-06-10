$(document).ready(function () {
  console.log("Ready");
});

// Click event listeners
$("button").bind(
  "click",
  { name: "Sundeep", age: 21, role: "instructor" },
  function (event) {
    console.log(event.namespace);
    console.log("I am getting clicked", event.data);
  }
);

// var currentTime = 0;
// $("button").click(function (event) {
//   console.log("I am being clicked", event.timeStamp - currentTime);
//   currentTime = event.timeStamp;
// });

// $("button").bind("click", function (event) {
//   $(this).css({
//     display: "block",
//     width: "100vw",
//     height: "100vh",
//     background: "yellow",
//     fontSize: "50px"
//   });
// });

// Change event
$('input[type="text"]').change(function (event) {
  console.log("The value is ", this.value);
});

// Keypress
$(window).keypress(function (event) {
  console.log("The value is ", event.key);
});

// relatedTarget
$("span")
  .eq(2)
  .mouseenter(function (event) {
    console.log(event.relatedTarget); // "DIV"
  });

console.log($("span").eq(2));

$(".animatebutton").click(function () {
  // $(".animationsquare").animate(
  //   {
  //     left: "+=100",
  //     backgroundColor: "yellow"
  //   },
  //   3000,
  //   function () {
  //     console.log("Animation complete");
  //   }
  // );

  $(".animationsquare").slideUp(3000, function () {
    console.log("Slide up complete");
  });
});

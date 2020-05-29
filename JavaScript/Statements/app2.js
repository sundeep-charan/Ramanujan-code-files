var grade = prompt("Enter your grade");
// Version 1
// if (grade === "A") {
//   alert("Excellent!")
// } else  {
//   if (grade === "B") {
//     alert("Good")
//   } else  {
//     if (grade === "C") {
//       alert("Can do better")
//     } else  {
//       if (grade === "D") {
//         alert("Bad. Better try next time")
//       } else {
//         if (grade === "E") {
//           alert("Average.")
//         } else {
//           if (grade === "F") {
//             alert("Failed!")
//           } else {
//             alert("Invalid grade")
//           }
//         }
//       }
//     }
//   }
// }

//Version 2
// if (grade === "A") {
//   alert("Excellent!");
// } else if (grade === "B") {
//   alert("Good");
// } else if (grade === "C") {
//   alert("Can do better");
// } else if (grade === "D") {
//   alert("Bad. Better try next time");
// } else if (grade === "E") {
//   alert("Average.");
// } else if (grade === "F") {
//   alert("Failed!");
// } else {
//   alert("Invalid grade");
// }

// Version 3.
switch (grade) {
  case "A":
    alert("Excellent!");
    break;
  case "B":
    alert("Good");
    break;
  case "C":
    alert("Better");
    break;
  case "D":
    alert("Average");
    break;
  case "E":
    alert("Below Average");
    break;
  case "F":
    alert("Failed");
    break;
  default:
    alert("Invalid grade");
}

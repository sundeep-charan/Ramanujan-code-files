var pocketMoneyInMyHand = prompt("Enter your pocket money");
var icecreamPrice = 40;

// Version 1
// if (icecreamPrice > pocketMoneyInMyHand) {
//   alert("Sorry, you cannot buy it.");
// } else {
//   pocketMoneyInMyHand = pocketMoneyInMyHand - icecreamPrice;
//   document.write(
//     "Here you go. Thank you for purchasing. Your balance is " +
//       pocketMoneyInMyHand
//   );
// }

// Version 2
var conPocketMoney = parseInt(pocketMoneyInMyHand);
var isNotValidNumber = isNaN(conPocketMoney);

// if (isNotValidNumber === true) {
//   alert("Invalid number");
// } else {
//   if (icecreamPrice > conPocketMoney) {
//     alert("Sorry, you cannot buy it.");
//   } else {
//     conPocketMoney = conPocketMoney - icecreamPrice;
//     document.write(
//       "Here you go. Thank you for purchasing. Your balance is " +
//         pocketMoneyInMyHand
//     );
//   }
// }

// Version 3
if (isNotValidNumber) {
  alert("Invalid number");
} else if (icecreamPrice - 1 === conPocketMoney) {
  alert("No problem! Give the remaining 1 Re, tomorrow");
} else if (icecreamPrice > conPocketMoney) {
  alert("Sorry, you cannot buy it.");
} else {
  conPocketMoney = conPocketMoney - icecreamPrice;
  document.write(
    "Here you go. Thank you for purchasing. Your balance is " + conPocketMoney
  );
}

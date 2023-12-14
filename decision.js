var myBalance = 16;
//false
/***
 * Basic If else
 * Nested if else
 * if else ladger
 */

//Basic if Else
if (myBalance == 16) {
  console.log("I have exactly 16 Taka");
} else {
  console.log("I Dont have exactly 16 Taka");
}

//nested if else

if (myBalance < 15) {
  //true block
  console.log("Shudhu Chips Kinbo");
} else {
  //false block
  if (myBalance > 30) {
    console.log("Chipps o kinbo , chocolate o kinbo");
  } else {
    console.log("chips + lolipop kinbo");
  }
}

//nested if else
if (myBalance > 100) {
  console.log("Buy a Pizza");
} else if (myBalance > 50) {
  console.log("Buy some cookies");
} else {
  console.log("save for later");
}

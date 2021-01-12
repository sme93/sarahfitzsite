---
title: "Day 1"
---

import Layout from "../components/layout"

<Layout>

Reviewed Javascript If Statements, and I learned about Ternary Operators
and Switch Statements. I also bought and set up this domain using a Gatsby template.

 If statements - perform a task based on a condition.

 ```JS
var isHungry = true;
 if (isHungry) {
   console.log("Time to eat!");
 }
 // output - Time to eat! if the variable isHungry is set to false then nothing will log.
 ```
 If we want to add a line that will run if the condition is false, we would use an if...else
 statement.

 ```JS
 if (isHungry) {
   console.log("Time to eat!");
 } else {
   console.log("Good to go.");
 }
// output is Time to eat! if the variable isHungry is equal to true.
// output is Good to go. if the variable isHungry is equal to false.
// ALSO! if the variable isHungry is set to a positive integer, it is true, but if
// it is set to 0 is evaluates as false.
```
Now let's use some comparison operators to evaluate to true or false in our conditional statements.
Comparison operators compare the value on the left with the value on the right.

Here's a list of comparison operators and their syntax:
```JS
Less than <
Greater than >
Less than or equal to <=
Greater than or equal to >=
Is exactly equal to ===
Is not equal to !==
```
Here's our hungry example changed a little bit so we can use comparison operators.

```JS
let hungerLevel = 7;

if (hungerLevel >= 7) {
  console.log("Time to eat!");
} else {
  console.log("Good to go.");
}
// output Time to eat!
```
We can also use logical operators in our if...else statements to add another layer of logic. The logical operators are
```JS
&& and operator
|| or operator
! the not operator aka the bang operator
```
Here's an example using logical operators
```JS
var bankAccount = "Bankrupt";
var pantryLevel = "empty";

if (bankAccount === "Got Paid" && pantryLevel === "empty") {
  console.log("Go food shopping");
} else {
  console.log("Hunger strike.");
}
// output = Hunger strike.
```
Ternary operators perform the same functionality as if...else statements but look much simpler. Here is our isHungry example using a ternary operator.
```JS
var isHungry = true
isHungry ? console.log("Time to eat!") :
console.log("Good to go.");
// output Time to eat!
```
The last new thing for today is the use of switch statements in place of if else statements to make the code more readible. Here is what they look like...
```JS
var dairyItem = "Fage 0%";

switch (dairyItem) {
  case "Liberte blackberry" :
    console.log("Liberte is $1.09");
    break;
  case "Siggi's Kefir" :
    console.log("Siggi's is $3.79");
    break;
  case "Fage 0%" :
    console.log("Fage is $1.79");
    break;
  default :
    console.log("Invalid SKU");
    break;
}

//output Fage is $1.79
```

Today I listened to Mutilator Defeated at Last by Thee Oh Sees while I was coding.

</Layout>

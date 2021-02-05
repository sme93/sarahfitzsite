---
title: "Day 27"
---

import Layout from "../components/layout"

<Layout>

Today we learned about Objects and Functions. I worked on some basic object lessons in a Rep.l but I'll post it here.

```JS
var user3 = {
  name: "Oscar",
  age: 7,
  breed: "Shih-tzu, mostly",
  hobbies: ["Following Sodie around", "Peeing", "Carrying stuffed animals around the house"],
}

// 1. Access the value of user3
console.log(user3);
// output -
//{  name: "Oscar",
//   age: 7,
//   breed: "Shih-tzu, mostly",
//   hobbies: ["Following Sodie around", "Peeing", "Carrying stuffed animals around the house"],
// }

// 2. Access the value of the name of user3
console.log(user3.name);
//output - Oscar

// 3. Add a new property of your choosing
user3.friends = ["Seven", "Tuna", "Joey"];

// 4. Check the value of user3 again
console.log(user3);
//output - {
  // name: 'Oscar',
  // age: 7,
  // breed: 'Shih-tzu, mostly',
  // hobbies: [
  //   'Following Sodie around',
  //   'Peeing',
  //   'Carrying stuffed animals around the house'],
  // friends: [ 'Seven', 'Tuna', 'Joey' ]

// 5. Change the value of the name of user3
user3.name = "Esme";

// 6. Check the value of user3
console.log(user3);
//output -
// {
//   name: 'Esme',
//   age: 7,
//   breed: 'Shih-tzu, mostly',
//   hobbies: [
//     'Following Sodie around',
//     'Peeing',
//     'Carrying stuffed animals around the house'
//   ],
//   friends: [ 'Seven', 'Tuna', 'Joey' ]
// }

// 7. Declare a method on user3 that logs "Why am I so cute?" to the console
user3.cute = function cuteness() {
  return ("Why am I so cute?");
}

// 8. Check the value of user3. Do you see your method?
console.log(user3);
//output -
// {
//   name: 'Esme',
//   age: 7,
//   breed: 'Shih-tzu, mostly',
//   hobbies: [
//     'Following Sodie around',
//     'Peeing',
//     'Carrying stuffed animals around the house'
//   ],
//   friends: [ 'Seven', 'Tuna', 'Joey' ],
//   cute: [Function: cuteness]
// }
// 9. Use user3 to log "Why am I so cute?"
console.log(user3.cute());
//output Why am I so cute?
```
And I had some fun just messing with Arrays in the console on Chrome -

```JS
var myVar = "to be"
myVar = "or not to be"
"or not to be"
console.log(myVar);
 or not to be

newVar = 1000
1000
var theta = "this is a sentence"

var myFavAnimals = ["koala", "dog", "bears"];

var fiveNumbersThreeStrings = [7, 2, 5, "poker", "fun"];

var tenNames = ["Sophie", "Sarah", "Carolyn", "Devin", "Ken", "Tom", "Karen", "Joey", "Ruth", "Bob"];

console.log(tenNames[0]);
 Sophie

console.log(tenNames[4]);
 Ken

tenNames[9] = "cucumber";
"cucumber"
console.log(tenNames[9]);
 cucumber

tenNames[1] = 91;
91
tenNames.push("aspen");
11
console.log(tenNames);
 ["Sophie", 91, "Carolyn", "Devin", "Ken", "Tom", "Karen", "Joey", "Ruth", "cucumber", "aspen"]

tenNames.pop();
"aspen"
```
Then did assignment operators and logical operators practice in the console -
```JS
var numPizzas = 10
undefined
var numToppings = 2 * numPizzas
undefined
numPizzas = 25
25
console.log(numToppings);
VM2646:1 20
undefined
somePizzaVar = 10
10
console.log(numToppings);
VM2770:1 20
undefined
12 + 53
65
"Turing" + " " + "School"
"Turing School"
"String" + 10
"String10"
13 + 4 * 6
37
(13 + 4) * 6
102
-1 + 3
2
5.333/2
2.6665
0/2
0
2/0
Infinity
5.3333%2
1.3333000000000004
2%2
0
var incremementMe = 50
undefined
++incremementMe
51
++incremementMe
52
var decrementMe = 50
undefined
--decrementMe
49
--decrementMe
48
5 === 5
true
"All the words" === "All the words"
true
"All the words" === "All the words!"
false
2 === "2"
false
"true" === true
false
var aVar = 67
undefined
var bVar = 67
undefined
var cVar = "67"
undefined
aVar === bVar
true
aVar === cVar
false
5 !== 5
false
2 !==2
false
true !== false
true
true && true
true
true && false
false
true || true
true
true || false
true
false || true
true
false && true || true
true
false && true || false
false
false && (true || true)
false
!true
false
!false
true
```
Pretty basic, but good practice.


Listened to more Angel Olsen while I was practicing today.


</Layout>

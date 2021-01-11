---
title: "Day 6"
---
import Layout from "../components/layout"

<Layout>

Reviewed for loops and learned about nested loops, the while loop and do... while statements on Codecademy. They were a little confusing so I'm going to post some practice loops here.

Looping through Arrays

```JS
const myHousePlants = ["bromeliad", "ivy", "jade", "orchid", "fern"];

for (let i = 0; i < myHousePlants.length; i++) {
  console.log(myHousePlants[i]);
}
// output - "bromeliad", "ivy", "jade", "orchid", "fern"
```
Nested loops - a loop running inside of another loop
```JS
var joeyTraits = ["brown", "female", "small", "loves to go for walks"];
var sevenTraits = ["beagle", "female", "small", "loves to snuggle"];

var mutualDogTraits = [];

for (let i = 0; i < joeyTraits.length; i++) {
  for (let j = 0; j < sevenTraits.length; j++) {
    if (joeyTraits[i] === sevenTraits[j]) {
      mutualDogTraits.push(joeyTraits[i]);
    }
  }
}
console.log(mutualDogTraits);
//output [ 'female', 'small' ]
```
The While Loop - use these when we want a loop to execute an undetermined number of times. Syntax for the while loop looks like this:
```JS
while (condition) {
  // code block to be executed
}
```
I'm just going to use the same example as Codecademy here because I can't really think of anything else.
```JS
var cards = ["diamond", "spade", "heart", "club"];
var currentCard = "";

while (cards =! "spade") {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}
//output - random card generator
```
The Math.floor() function used above returns the largest integer less than or equal to a given number.
Combined with the Math.random() * 4 function it will give us a random number from 0 to 3. That number indexes the cards array, and then we can assign the value of currentCard to a random element from that array. Again, this is directly from the Codecademy lesson. 

I listened to Miles Davis and Charles Mingus while coding.

</Layout>
